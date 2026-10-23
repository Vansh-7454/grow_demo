"use client";

import { useState, useId } from "react";
import { siteContent } from "@/data/siteContent";

interface FormState {
  fullName: string;
  phone: string;
  email: string;
  petType: "Dog" | "Cat" | "Both" | "";
  service: string;
  message: string;
}

interface FormErrors {
  fullName?: string;
  phone?: string;
  email?: string;
  petType?: string;
  service?: string;
  message?: string;
}

export default function ContactForm() {
  const formId = useId();
  const [formData, setFormData] = useState<FormState>({
    fullName: "",
    phone: "",
    email: "",
    petType: "",
    service: "Basic Bath & Hygiene",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [preparedWhatsAppUrl, setPreparedWhatsAppUrl] = useState<string | null>(
    null
  );

  function normalizePhone(input: string): {
    normalized: string;
    isValid: boolean;
    error?: string;
  } {
    // Strip spaces, dashes, brackets, plus
    let digits = input.replace(/[\s\-\(\)\+]/g, "");

    // Strip leading country code +91 or 91 if 12 digits
    if (digits.startsWith("91") && digits.length === 12) {
      digits = digits.slice(2);
    }
    // Strip leading 0 if 11 digits
    if (digits.startsWith("0") && digits.length === 11) {
      digits = digits.slice(1);
    }

    // Check if only digits
    if (!/^\d+$/.test(digits)) {
      return {
        normalized: digits,
        isValid: false,
        error: "Phone number must contain digits only.",
      };
    }

    // Check exact 10 digits
    if (digits.length !== 10) {
      return {
        normalized: digits,
        isValid: false,
        error: "Please enter an exact 10-digit mobile number.",
      };
    }

    // Check India mobile starting digit: 6, 7, 8, 9
    const firstDigit = digits.charAt(0);
    if (!["6", "7", "8", "9"].includes(firstDigit)) {
      return {
        normalized: digits,
        isValid: false,
        error: "Indian mobile numbers must start with 6, 7, 8, or 9.",
      };
    }

    // Reject junk numbers like all identical digits (0000000000, 9999999999) or sequential (1234567890)
    const isAllSame = new Set(digits.split("")).size === 1;
    const isSequential = digits === "1234567890" || digits === "0123456789";

    if (isAllSame || isSequential) {
      return {
        normalized: digits,
        isValid: false,
        error: "Please enter a valid mobile number.",
      };
    }

    return { normalized: digits, isValid: true };
  }

  function validate(): boolean {
    const newErrors: FormErrors = {};

    // Name validation: 2 to 60 characters trimmed
    const trimmedName = formData.fullName.trim();
    if (trimmedName.length < 2) {
      newErrors.fullName = "Please enter your name (at least 2 characters).";
    } else if (trimmedName.length > 60) {
      newErrors.fullName = "Name must not exceed 60 characters.";
    }

    // Phone validation
    const phoneCheck = normalizePhone(formData.phone);
    if (!phoneCheck.isValid) {
      newErrors.phone = phoneCheck.error;
    }

    // Email validation (optional, but if provided, must be valid)
    const trimmedEmail = formData.email.trim();
    if (trimmedEmail.length > 0) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(trimmedEmail)) {
        newErrors.email = "Please enter a valid email address.";
      }
    }

    // Pet Type validation
    if (!formData.petType) {
      newErrors.petType = "Please select whether you have a Dog or Cat.";
    }

    // Message length: up to 1000 characters
    if (formData.message.trim().length > 1000) {
      newErrors.message = "Message must not exceed 1000 characters.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    const phoneCheck = normalizePhone(formData.phone);
    const sanitizedName = formData.fullName.trim();
    const sanitizedEmail = formData.email.trim();
    const sanitizedMessage = formData.message.trim();

    // Construct direct WhatsApp message for the studio
    const msg = `*New Grooming Inquiry via Website*
Name: ${sanitizedName}
Phone: +91 ${phoneCheck.normalized}
${sanitizedEmail ? `Email: ${sanitizedEmail}\n` : ""}Pet: ${formData.petType}
Service: ${formData.service}
${sanitizedMessage ? `Notes: ${sanitizedMessage}` : ""}`;

    const waLink = `https://wa.me/${siteContent.business.whatsappRaw}?text=${encodeURIComponent(
      msg
    )}`;

    setPreparedWhatsAppUrl(waLink);

    // Open WhatsApp in a new window/tab
    window.open(waLink, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="bg-white border border-[#CBD3CC] rounded-2xl p-6 sm:p-8 shadow-[0_4px_20px_-2px_rgba(30,58,52,0.05)]">
      <div className="mb-6">
        <h3 className="text-xl md:text-2xl font-bold text-[#1E3A34] tracking-tight">
          Request a Grooming Appointment
        </h3>
        <p className="text-sm text-[#57635E] mt-1 leading-relaxed">
          Fill in your pet&apos;s details below to initiate a direct appointment inquiry on WhatsApp.
        </p>
      </div>

      <form onSubmit={handleSubmit} noValidate className="space-y-5">
        {/* Full Name */}
        <div>
          <label
            htmlFor={`${formId}-name`}
            className="block text-xs font-semibold uppercase tracking-wider text-[#1A201E] mb-1.5"
          >
            Pet Parent Full Name <span className="text-[#D97706]">*</span>
          </label>
          <input
            id={`${formId}-name`}
            type="text"
            required
            autoComplete="name"
            maxLength={60}
            value={formData.fullName}
            onChange={(e) =>
              setFormData({ ...formData, fullName: e.target.value })
            }
            className={`w-full min-h-[44px] px-3.5 py-2.5 text-sm bg-[#FBFBF9] border rounded-lg text-[#1A201E] focus-visible:outline-2 ${
              errors.fullName
                ? "border-red-600 focus-visible:outline-red-600"
                : "border-[#CBD3CC] focus-visible:outline-[#1E3A34]"
            }`}
            placeholder="e.g. Priya Sharma"
          />
          {errors.fullName && (
            <p className="text-xs text-red-600 mt-1 font-medium">
              {errors.fullName}
            </p>
          )}
        </div>

        {/* Mobile Number */}
        <div>
          <label
            htmlFor={`${formId}-phone`}
            className="block text-xs font-semibold uppercase tracking-wider text-[#1A201E] mb-1.5"
          >
            Mobile Number (10 Digits) <span className="text-[#D97706]">*</span>
          </label>
          <div className="relative">
            <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-xs font-semibold text-[#57635E]">
              +91
            </span>
            <input
              id={`${formId}-phone`}
              type="tel"
              required
              inputMode="numeric"
              autoComplete="tel-national"
              maxLength={14}
              value={formData.phone}
              onChange={(e) =>
                setFormData({ ...formData, phone: e.target.value })
              }
              className={`w-full min-h-[44px] pl-12 pr-3.5 py-2.5 text-sm bg-[#FBFBF9] border rounded-lg text-[#1A201E] font-mono focus-visible:outline-2 ${
                errors.phone
                  ? "border-red-600 focus-visible:outline-red-600"
                  : "border-[#CBD3CC] focus-visible:outline-[#1E3A34]"
              }`}
              placeholder="9812345678"
            />
          </div>
          {errors.phone ? (
            <p className="text-xs text-red-600 mt-1 font-medium">
              {errors.phone}
            </p>
          ) : (
            <p className="text-[11px] text-[#7B8882] mt-1">
              Required for appointment coordination and pickup alerts.
            </p>
          )}
        </div>

        {/* Email Address (Optional) */}
        <div>
          <label
            htmlFor={`${formId}-email`}
            className="block text-xs font-semibold uppercase tracking-wider text-[#1A201E] mb-1.5"
          >
            Email Address (Optional)
          </label>
          <input
            id={`${formId}-email`}
            type="email"
            autoComplete="email"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            className={`w-full min-h-[44px] px-3.5 py-2.5 text-sm bg-[#FBFBF9] border rounded-lg text-[#1A201E] focus-visible:outline-2 ${
              errors.email
                ? "border-red-600 focus-visible:outline-red-600"
                : "border-[#CBD3CC] focus-visible:outline-[#1E3A34]"
            }`}
            placeholder="priya@example.com"
          />
          {errors.email && (
            <p className="text-xs text-red-600 mt-1 font-medium">
              {errors.email}
            </p>
          )}
        </div>

        {/* Pet Type & Service Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label
              htmlFor={`${formId}-petType`}
              className="block text-xs font-semibold uppercase tracking-wider text-[#1A201E] mb-1.5"
            >
              Pet Type <span className="text-[#D97706]">*</span>
            </label>
            <select
              id={`${formId}-petType`}
              required
              value={formData.petType}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  petType: e.target.value as FormState["petType"],
                })
              }
              className={`w-full min-h-[44px] px-3.5 py-2.5 text-sm bg-[#FBFBF9] border rounded-lg text-[#1A201E] focus-visible:outline-2 ${
                errors.petType
                  ? "border-red-600 focus-visible:outline-red-600"
                  : "border-[#CBD3CC] focus-visible:outline-[#1E3A34]"
              }`}
            >
              <option value="">Select Pet...</option>
              <option value="Dog">Dog</option>
              <option value="Cat">Cat</option>
              <option value="Both">Both Dog & Cat</option>
            </select>
            {errors.petType && (
              <p className="text-xs text-red-600 mt-1 font-medium">
                {errors.petType}
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor={`${formId}-service`}
              className="block text-xs font-semibold uppercase tracking-wider text-[#1A201E] mb-1.5"
            >
              Desired Service Package
            </label>
            <select
              id={`${formId}-service`}
              value={formData.service}
              onChange={(e) =>
                setFormData({ ...formData, service: e.target.value })
              }
              className="w-full min-h-[44px] px-3.5 py-2.5 text-sm bg-[#FBFBF9] border border-[#CBD3CC] rounded-lg text-[#1A201E] focus-visible:outline-2 focus-visible:outline-[#1E3A34]"
            >
              <option value="Basic Bath & Hygiene">Basic Bath & Hygiene</option>
              <option value="Full Breed Styling & Groom">
                Full Breed Styling & Groom
              </option>
              <option value="Medicated Tick & Flea Spa">
                Medicated Tick & Flea Spa
              </option>
              <option value="Feline Comfort Bath">Feline Comfort Bath</option>
              <option value="Persian Cat De-Shedding & Groom">
                Persian Cat De-Shedding & Groom
              </option>
              <option value="Cat Lion Cut / Summer Trim">
                Cat Lion Cut / Summer Trim
              </option>
              <option value="Custom Consultation">Other / Custom Inquiry</option>
            </select>
          </div>
        </div>

        {/* Optional Notes */}
        <div>
          <label
            htmlFor={`${formId}-notes`}
            className="block text-xs font-semibold uppercase tracking-wider text-[#1A201E] mb-1.5"
          >
            Pet Breed, Age, or Special Care Notes (Max 1000 characters)
          </label>
          <textarea
            id={`${formId}-notes`}
            rows={3}
            maxLength={1000}
            value={formData.message}
            onChange={(e) =>
              setFormData({ ...formData, message: e.target.value })
            }
            className="w-full px-3.5 py-2.5 text-sm bg-[#FBFBF9] border border-[#CBD3CC] rounded-lg text-[#1A201E] focus-visible:outline-2 focus-visible:outline-[#1E3A34]"
            placeholder="e.g. 2-year-old Golden Retriever, sensitive ears, friendly temperament..."
          />
          {errors.message && (
            <p className="text-xs text-red-600 mt-1 font-medium">
              {errors.message}
            </p>
          )}
        </div>

        {/* Transparency note as strictly mandated by Rule 16 */}
        <div className="p-3 bg-[#F2F4F0] border border-[#CBD3CC] rounded-lg text-xs text-[#57635E] leading-relaxed">
          <p className="font-semibold text-[#1A201E] mb-0.5">
            Privacy & Transmission Transparency:
          </p>
          <p>
            This website does not transmit or store personal data in a remote database or cloud service. Submitting this form prepares your details directly into a WhatsApp chat with our Gurugram studio for immediate coordination.
          </p>
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            className="w-full min-h-[48px] px-6 py-3 text-base font-semibold text-white bg-[#1E3A34] hover:bg-[#142723] rounded-lg transition-colors flex items-center justify-center gap-2 shadow-sm"
          >
            <span>Continue to WhatsApp Booking</span>
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </button>
        </div>

        {preparedWhatsAppUrl && (
          <div className="mt-4 p-3 bg-[#EAF1ED] border border-[#1E3A34] rounded-lg text-xs text-[#1E3A34] flex items-center justify-between">
            <span>
              If WhatsApp did not automatically open, tap the link below:
            </span>
            <a
              href={preparedWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold underline ml-2"
            >
              Open WhatsApp Now →
            </a>
          </div>
        )}
      </form>
    </div>
  );
}
