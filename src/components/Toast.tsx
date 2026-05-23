import { useEffect } from 'react';
import { useTranslations, defaultLang } from '../i18n/ui';

export type ToastStatus = 'success' | 'error';

interface Props {
  status: ToastStatus;
  linkedinUrl: string;
  onClose: () => void;
}

const AUTO_DISMISS_MS = 6000;

export default function Toast({ status, linkedinUrl, onClose }: Props) {
  const t = useTranslations(defaultLang);

  useEffect(() => {
    const timer = setTimeout(onClose, AUTO_DISMISS_MS);
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className={`toast toast--${status}`} role="alert" aria-live="polite">
      <div className="toast__body">
        {status === 'success' ? (
          <>
            <span className="toast__icon">✓</span>
            <p className="toast__text">{t('toast.success')}</p>
          </>
        ) : (
          <>
            <span className="toast__icon">!</span>
            <p className="toast__text">
              {t('toast.error.prefix')}{' '}
              <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" className="toast__link">
                {t('toast.error.linkedin')}
              </a>
              .
            </p>
          </>
        )}
      </div>

      <button className="toast__close" onClick={onClose} aria-label={t('toast.dismiss')}>✕</button>
    </div>
  );
}
