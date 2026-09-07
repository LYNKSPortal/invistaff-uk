"use client";

import { useState, type FormEvent } from "react";
import { CheckCircle2, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/Button";

type FormState = {
  name: string;
  businessName: string;
  email: string;
  phone: string;
  businessDescription: string;
  helpNeeded: string;
  timeSink: string;
  additionalInfo: string;
  company: string;
};

const initialState: FormState = {
  name: "",
  businessName: "",
  email: "",
  phone: "",
  businessDescription: "",
  helpNeeded: "",
  timeSink: "",
  additionalInfo: "",
  company: "",
};

type FieldConfig = {
  name: keyof FormState;
  label: string;
  type: "text" | "email" | "tel" | "textarea";
  autoComplete?: string;
  required?: boolean;
};

const fields: FieldConfig[] = [
  { name: "name", label: "Name", type: "text", autoComplete: "name", required: true },
  {
    name: "businessName",
    label: "Business name",
    type: "text",
    autoComplete: "organization",
    required: true,
  },
  { name: "email", label: "Email", type: "email", autoComplete: "email", required: true },
  { name: "phone", label: "Phone number", type: "tel", autoComplete: "tel", required: true },
  {
    name: "businessDescription",
    label: "What does your business do?",
    type: "textarea",
    required: true,
  },
  {
    name: "helpNeeded",
    label: "What would you like help with?",
    type: "textarea",
    required: true,
  },
  {
    name: "timeSink",
    label: "What is currently taking up most of your time?",
    type: "textarea",
    required: true,
  },
  {
    name: "additionalInfo",
    label: "Anything else you'd like us to know?",
    type: "textarea",
  },
];

type Status = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const [values, setValues] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [status, setStatus] = useState<Status>("idle");
  const [serverError, setServerError] = useState<string | null>(null);

  const handleChange = (name: keyof FormState, value: string) => {
    setValues((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const validate = (): boolean => {
    const nextErrors: Partial<Record<keyof FormState, string>> = {};
    for (const field of fields) {
      if (field.required && values[field.name].trim().length === 0) {
        nextErrors[field.name] = `Please let us know ${field.label.toLowerCase()}`;
      }
    }
    if (values.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
      nextErrors.email = "Please enter a valid email address.";
    }
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setServerError(null);

    if (!validate()) return;

    setStatus("submitting");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        const data = await response.json().catch(() => ({}));
        throw new Error(data.error ?? "Something went wrong. Please try again.");
      }

      setStatus("success");
      setValues(initialState);
    } catch (err) {
      setStatus("error");
      setServerError(
        err instanceof Error ? err.message : "Something went wrong. Please try again.",
      );
    }
  };

  if (status === "success") {
    return (
      <div
        role="status"
        className="flex flex-col items-center gap-4 rounded-lg border border-forest-deep-15 bg-white p-10 text-center"
      >
        <CheckCircle2 className="size-10 text-forest-deep" aria-hidden="true" />
        <h3 className="font-serif text-2xl text-forest-900">Thank you</h3>
        <p className="pretty max-w-sm text-ink-soft">
          We&apos;ve received your message and will be in touch shortly to
          arrange your free discovery call.
        </p>
        <Button variant="secondary" onClick={() => setStatus("idle")} type="button">
          Send another message
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-6">
      {/* Honeypot field, hidden from real users */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="company">Company</label>
        <input
          id="company"
          name="company"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={values.company}
          onChange={(e) => handleChange("company", e.target.value)}
        />
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        {fields.map((field) => {
          const isTextarea = field.type === "textarea";
          const fieldId = `contact-${field.name}`;
          const errorId = `${fieldId}-error`;
          const hasError = Boolean(errors[field.name]);

          return (
            <div
              key={field.name}
              className={isTextarea ? "sm:col-span-2 flex flex-col" : "flex flex-col"}
            >
              <label htmlFor={fieldId} className="mb-2 text-sm font-medium text-forest-900">
                {field.label}
                {field.required && <span aria-hidden="true"> *</span>}
              </label>
              {isTextarea ? (
                <textarea
                  id={fieldId}
                  name={field.name}
                  rows={3}
                  required={field.required}
                  aria-invalid={hasError}
                  aria-describedby={hasError ? errorId : undefined}
                  value={values[field.name]}
                  onChange={(e) => handleChange(field.name, e.target.value)}
                  className={`w-full rounded-md border bg-white px-4 py-3 text-sm text-ink placeholder:text-ink-soft/60 transition-colors focus:border-forest-mid focus-visible:outline-none ${
                    hasError ? "border-red-400" : "border-forest-deep-15"
                  }`}
                />
              ) : (
                <input
                  id={fieldId}
                  name={field.name}
                  type={field.type}
                  autoComplete={field.autoComplete}
                  required={field.required}
                  aria-invalid={hasError}
                  aria-describedby={hasError ? errorId : undefined}
                  value={values[field.name]}
                  onChange={(e) => handleChange(field.name, e.target.value)}
                  className={`w-full rounded-md border bg-white px-4 py-3 text-sm text-ink placeholder:text-ink-soft/60 transition-colors focus:border-forest-mid focus-visible:outline-none ${
                    hasError ? "border-red-400" : "border-forest-deep-15"
                  }`}
                />
              )}
              {hasError && (
                <p id={errorId} role="alert" className="mt-1.5 text-xs text-red-600">
                  {errors[field.name]}
                </p>
              )}
            </div>
          );
        })}
      </div>

      {serverError && (
        <p role="alert" className="text-sm text-red-600">
          {serverError}
        </p>
      )}

      <Button type="submit" size="lg" disabled={status === "submitting"} withArrow>
        {status === "submitting" ? (
          <>
            <Loader2 className="size-4 animate-spin" aria-hidden="true" />
            Sending...
          </>
        ) : (
          "Send message"
        )}
      </Button>
      <p className="text-xs text-ink-soft">
        By submitting this form you agree to our{" "}
        <a href="/privacy-policy" className="link-underline">
          Privacy Policy
        </a>
        .
      </p>
    </form>
  );
}
