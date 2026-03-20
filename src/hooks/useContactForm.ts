import { useState, useCallback } from "react";

interface FormData {
  name: string;
  email: string;
  message: string;
}

type FormStatus = "idle" | "sending" | "success" | "error" | "invalid-email";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const INITIAL_DATA: FormData = { name: "", email: "", message: "" };

export function useContactForm() {
  const [formData, setFormData] = useState<FormData>(INITIAL_DATA);
  const [status, setStatus] = useState<FormStatus>("idle");

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value } = e.target;
      setFormData((prev) => ({ ...prev, [name]: value }));

      // Clear error states when user starts typing again
      if (status === "invalid-email" || status === "error") {
        setStatus("idle");
      }
    },
    [status]
  );

  const reset = useCallback(() => {
    setFormData(INITIAL_DATA);
    setStatus("idle");
  }, []);

  const handleSubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();

      if (!EMAIL_REGEX.test(formData.email)) {
        setStatus("invalid-email");
        return;
      }

      setStatus("sending");

      const formspreeUrl = process.env.NEXT_PUBLIC_FORMSPREE_URL;

      if (!formspreeUrl) {
        setStatus("error");
        return;
      }

      try {
        const response = await fetch(formspreeUrl, {
          method: "POST",
          headers: { Accept: "application/json", "Content-Type": "application/json" },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            message: formData.message,
          }),
        });

        const data = await response.json();

        if (response.ok && data.ok) {
          setStatus("success");
          setTimeout(reset, 4000);
        } else {
          setStatus("error");
          setTimeout(() => setStatus("idle"), 4000);
        }
      } catch {
        setStatus("error");
        setTimeout(() => setStatus("idle"), 4000);
      }
    },
    [formData, reset]
  );

  return { formData, status, handleChange, handleSubmit } as const;
}
