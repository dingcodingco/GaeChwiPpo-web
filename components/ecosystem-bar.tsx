import { ecosystemServices, CURRENT_SERVICE } from '@/lib/ecosystem';

/**
 * 딩코딩코 패밀리 바 — 연결된 3개 서비스를 한 줄로 노출한다.
 * 현재 서비스(개취뽀)는 강조하고, 나머지는 커스텀 도메인으로 링크한다.
 * 다크 톤(bg-gray-900) 푸터에 맞춰 스타일링.
 */
export function EcosystemBar() {
  return (
    <div className="border-t border-gray-800 mt-8 pt-8">
      <div className="flex items-center gap-2 mb-4">
        <span
          className="inline-block w-1.5 h-1.5 rounded-sm bg-white/60"
          aria-hidden="true"
        />
        <span className="text-xs uppercase tracking-[0.2em] text-gray-500">
          딩코딩코 패밀리
        </span>
      </div>

      <ul className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        {ecosystemServices.map(svc => {
          const isCurrent = svc.id === CURRENT_SERVICE;
          const inner = (
            <>
              <div className="flex items-center gap-2">
                <span className="text-lg leading-none" aria-hidden="true">
                  {svc.emoji}
                </span>
                <span className="font-semibold text-sm text-white">
                  {svc.name}
                </span>
                {isCurrent ? (
                  <span className="ml-auto text-[10px] font-medium text-white bg-white/10 rounded-full px-2 py-0.5">
                    현재 보는 중
                  </span>
                ) : (
                  <span
                    className="ml-auto text-gray-500 text-xs"
                    aria-hidden="true"
                  >
                    ↗
                  </span>
                )}
              </div>
              <p className="mt-1.5 text-xs text-gray-400 leading-relaxed">
                {svc.tagline}
              </p>
              <span className="mt-2 inline-block text-[10px] font-medium text-gray-500 tracking-wide">
                {svc.role}
              </span>
            </>
          );
          const cardClass =
            'block h-full rounded-xl border p-4 transition-colors ' +
            (isCurrent
              ? 'border-white/25 bg-white/[0.04]'
              : 'border-gray-800 hover:border-white/30 hover:bg-white/[0.03]');

          return (
            <li key={svc.id}>
              {isCurrent ? (
                <div className={cardClass} aria-current="page">
                  {inner}
                </div>
              ) : (
                <a
                  href={svc.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cardClass}
                >
                  {inner}
                </a>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
