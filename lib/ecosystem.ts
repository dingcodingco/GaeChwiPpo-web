/**
 * 딩코딩코 패밀리 — 서로 연결된 3개 서비스.
 *
 * "학습(딩코딩코) → 취업 훈련(부트캠프) → 취업 커뮤니티(개취뽀)" 여정을 이룬다.
 * 세 레포가 동일한 정의를 공유하며, 각 레포는 CURRENT_SERVICE 로 자기 자신을 표시한다.
 * href 는 커스텀 도메인(*.dingco.net)을 사용한다.
 */

export interface EcosystemService {
  id: 'dingcodingco' | 'bootcamp' | 'gaechwippo';
  name: string;
  tagline: string;
  role: string;
  href: string;
  emoji: string;
}

/** 이 레포가 배포되는 서비스. */
export const CURRENT_SERVICE: EcosystemService['id'] = 'gaechwippo';

/** 문의·상담 CTA는 딩코딩코 카카오톡 채널 채팅으로 통일. */
export const KAKAO_CHANNEL_CHAT = 'https://pf.kakao.com/_xhwxfPX/chat';

/** 여정 순서대로: 학습 → 취업 훈련 → 취업 커뮤니티 */
export const ecosystemServices: EcosystemService[] = [
  {
    id: 'dingcodingco',
    name: '딩코딩코',
    tagline: 'AI 코딩 교육 · 학습 로드맵',
    role: '학습 시작',
    href: 'https://dingco.net',
    emoji: '🧭',
  },
  {
    id: 'bootcamp',
    name: '백엔드 취업 부트캠프',
    tagline: 'Spring에서 시작해 AI로 끝낸다',
    role: '취업 훈련',
    href: 'https://bootcamp.dingco.net',
    emoji: '🚀',
  },
  {
    id: 'gaechwippo',
    name: '개취뽀',
    tagline: '현직자와 함께하는 개발자 취업 커뮤니티',
    role: '취업 · 이직',
    href: 'https://gaechwippo.dingco.net',
    emoji: '🤝',
  },
];
