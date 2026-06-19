import { useState, useCallback } from 'react';
import Toast, { type ToastStatus } from './Toast';
import { useTranslations, defaultLang } from '../i18n/ui';
import { SITE_CONFIG } from '../data/config';

export default function ContactForm() {
  const t = useTranslations(defaultLang);
  const [open, setOpen] = useState(false);
  const [sending, setSending] = useState(false);
  const [toast, setToast] = useState<ToastStatus | null>(null);

  const dismissToast = useCallback(() => setToast(null), []);

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSending(true);

    const formData = new FormData(event.currentTarget);
    formData.append('access_key', SITE_CONFIG.web3formsKey);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });
      const data = await response.json();

      if (data.success) {
        (event.target as HTMLFormElement).reset();
        setToast('success');
      } else {
        setToast('error');
      }
    } catch {
      setToast('error');
    } finally {
      setSending(false);
      setOpen(false);
    }
  };

  return (
    <>
      <button
        className="contact-fab"
        onClick={() => setOpen(o => !o)}
        aria-label={t('contact.aria')}
        title={t('contact.title')}
      >
        {open ? '✕' : '✉'}
      </button>

      {open && (
        <div className="contact-panel glass-panel">
          <h3 className="contact-panel-title text-gradient">{t('contact.title')}</h3>

          <form onSubmit={onSubmit} className="contact-form">
            <label className="contact-label">
              {t('contact.name.label')}
              <input
                className="contact-input"
                type="text"
                name="name"
                required
                placeholder={t('contact.name.placeholder')}
              />
            </label>

            <label className="contact-label">
              {t('contact.email.label')}
              <input
                className="contact-input"
                type="email"
                name="email"
                required
                placeholder={t('contact.email.placeholder')}
              />
            </label>

            <label className="contact-label">
              {t('contact.message.label')}
              <textarea
                className="contact-input contact-textarea"
                name="message"
                required
                placeholder={t('contact.message.placeholder')}
              />
            </label>

            <button
              className="contact-submit"
              type="submit"
              disabled={sending}
            >
              {sending ? t('contact.sending') : t('contact.submit')}
            </button>
          </form>
        </div>
      )}

      {toast && (
        <Toast status={toast} linkedinUrl={SITE_CONFIG.linkedin} onClose={dismissToast} />
      )}

    </>
  );
}
