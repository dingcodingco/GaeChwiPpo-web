import { Button } from '@/components/ui/button';
import { EcosystemBar } from '@/components/ecosystem-bar';
import { Badge } from '@/components/ui/badge';
import {
  Calendar,
  Users,
  MessageSquare,
  Star,
  ArrowRight,
  User,
  Building,
  MessageCircle,
  BookOpen,
  Award,
} from 'lucide-react';
import Link from 'next/link';
import { speakers, getTotalSpeakers, getTotalSessions } from '@/data/speakers';
import { studies } from '@/data/studies';
import CommunityChannels from '@/components/community-channels';
import { SpeakerAvatar } from '@/components/speaker-avatar';
import NewsletterSubscription from '@/components/newsletter-subscription';

export default function HomePage() {
  const stats = [
    { label: '누적 연사', value: `${getTotalSpeakers()}명`, icon: Users },
    { label: '개최 모임', value: `${getTotalSessions()}회`, icon: Calendar },
    { label: '커뮤니티 멤버', value: '3,000+', icon: MessageSquare },
    { label: '평균 만족도', value: '4.8/5', icon: Star },
  ];

  return (
    <div className="min-h-screen bg-[#070a14] text-white selection:bg-sky-500/30">
      {/* Header */}
      <header className="border-b border-gray-800 bg-gray-900/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <img
                src="/logo.png"
                alt="개취뽀 로고"
                className="w-10 h-10 rounded-lg"
              />
              <span className="text-xl font-bold text-white">개취뽀</span>
            </div>
            <nav
              className="hidden md:flex items-center space-x-6"
              role="navigation"
              aria-label="주요 메뉴"
            >
              <Link
                href="#speakers"
                className="text-gray-300 hover:text-white transition-colors"
              >
                연사 정보
              </Link>
              <Link
                href="#studies"
                className="text-gray-300 hover:text-white transition-colors"
              >
                스터디 활동
              </Link>
              <Link
                href="#activities"
                className="text-gray-300 hover:text-white transition-colors"
              >
                활동 소개
              </Link>
              <Link
                href="#community"
                className="text-gray-300 hover:text-white transition-colors"
              >
                커뮤니티 채널
              </Link>
              <Link href="/apply">
                <Button
                  variant="outline"
                  size="sm"
                  className="border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white"
                >
                  연사 신청
                </Button>
              </Link>
            </nav>
          </div>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden py-24 md:py-32 px-4">
          {/* ambient glows + grid */}
          <div
            className="pointer-events-none absolute inset-0 -z-10"
            aria-hidden="true"
            style={{
              backgroundImage:
                'radial-gradient(ellipse 55% 45% at 50% 0%, rgba(56,189,248,0.16) 0%, transparent 60%), radial-gradient(ellipse 40% 40% at 80% 20%, rgba(99,102,241,0.14) 0%, transparent 60%)',
            }}
          />
          <div
            className="pointer-events-none absolute inset-0 -z-10 opacity-[0.04]"
            aria-hidden="true"
            style={{
              backgroundImage:
                'linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)',
              backgroundSize: '48px 48px',
              maskImage:
                'radial-gradient(ellipse 70% 60% at 50% 30%, black, transparent 75%)',
            }}
          />
          <div className="container mx-auto text-center">
            <div className="max-w-4xl mx-auto">
              <span
                className="gcp-rise mb-6 inline-flex items-center gap-2 rounded-full border border-sky-400/25 bg-sky-500/10 px-4 py-1.5 text-sm font-medium text-sky-200"
                style={{ '--d': '0ms' } as React.CSSProperties}
              >
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-400 opacity-60" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-sky-400" />
                </span>
                개발자 취업 준비생 커뮤니티
              </span>
              <h1
                className="gcp-rise text-5xl md:text-7xl font-extrabold tracking-tight text-white mb-6 leading-[1.05]"
                style={{ '--d': '90ms' } as React.CSSProperties}
              >
                개발자{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-indigo-400">
                  취업
                </span>
                을 <br />
                <span className="gcp-shimmer text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-cyan-300 to-indigo-400">
                  뽀개자
                </span>
              </h1>
              <p
                className="gcp-rise text-lg md:text-xl text-gray-300/90 mb-10 leading-relaxed"
                style={{ '--d': '180ms' } as React.CSSProperties}
              >
                개발자 취업 준비생과 이직 준비생들이 모여 <br />
                실무 경험과 노하우를 공유하는 모임
              </p>
              <div
                className="gcp-rise flex flex-col sm:flex-row gap-4 justify-center"
                style={{ '--d': '280ms' } as React.CSSProperties}
              >
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-sky-500 to-indigo-500 hover:from-sky-400 hover:to-indigo-400 text-white shadow-lg shadow-sky-500/25"
                  asChild
                >
                  <Link href="/speakers">
                    연사 정보 보기
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white/20 bg-white/5 text-white hover:bg-white/10 hover:border-white/40"
                  asChild
                >
                  <Link href="#community">
                    커뮤니티 참여하기
                    <MessageCircle className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="pb-8 px-4" aria-labelledby="stats-heading">
          <div className="container mx-auto max-w-5xl">
            <h2 id="stats-heading" className="sr-only">
              개취뽀 커뮤니티 통계
            </h2>
            <div className="gcp-reveal grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center gap-2 rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-6 text-center backdrop-blur-sm transition-colors hover:border-sky-400/30 hover:bg-white/[0.05]"
                >
                  <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-sky-400/25 bg-sky-500/10">
                    <stat.icon
                      className="h-5 w-5 text-sky-300"
                      aria-hidden="true"
                    />
                  </div>
                  <div className="bg-gradient-to-b from-white to-white/70 bg-clip-text text-3xl font-extrabold tracking-tight text-transparent">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Activities Section */}
        <section
          id="activities"
          className="py-20 px-4"
          aria-labelledby="activities-heading"
        >
          <div className="container mx-auto">
            <div className="gcp-reveal text-center mb-16">
              <h2
                id="activities-heading"
                className="text-3xl md:text-4xl font-bold text-white mb-4"
              >
                개취뽀 주요 활동
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                체계적인 프로그램으로 개발자 취업 준비를 완벽하게 지원합니다
              </p>
            </div>

            <div className="gcp-reveal grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* 정기 오프라인 모임 */}
              <article className="border-white/10 bg-white/[0.03] backdrop-blur-sm shadow-lg shadow-black/30 transition-all duration-200 hover:-translate-y-1 hover:border-sky-400/40 hover:bg-white/[0.06] hover:shadow-xl hover:shadow-sky-500/10 rounded-2xl border">
                <div className="p-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-sky-500 to-indigo-600 rounded-lg flex items-center justify-center mb-4">
                    <Users className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  <h3 className="text-white text-xl font-semibold mb-2">
                    정기 오프라인 모임
                  </h3>
                  <p className="text-gray-400 mb-4">
                    분기별로 한번씩 진행되는 오프라인 정기모임, 강남역 인근에서
                    진행
                  </p>
                  <ul className="space-y-2 text-gray-300 text-sm">
                    <li>
                      • <strong>연사 발표</strong>: 현직자들의 실무 경험담
                      (20분)
                    </li>
                    <li>
                      • <strong>네트워킹 타임</strong>: 참가자들과의 자유로운
                      교류
                    </li>
                    <li>
                      • <strong>Q&A 세션</strong>: 취업 관련 질문과 답변
                    </li>
                    <li>
                      • <strong>참가비</strong>: 3만원 (점심 제공)
                    </li>
                  </ul>
                </div>
              </article>

              {/* 스터디 그룹 */}
              <article className="border-white/10 bg-white/[0.03] backdrop-blur-sm shadow-lg shadow-black/30 transition-all duration-200 hover:-translate-y-1 hover:border-sky-400/40 hover:bg-white/[0.06] hover:shadow-xl hover:shadow-sky-500/10 rounded-2xl border">
                <div className="p-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-sky-500 to-indigo-600 rounded-lg flex items-center justify-center mb-4">
                    <MessageSquare
                      className="h-6 w-6 text-white"
                      aria-hidden="true"
                    />
                  </div>
                  <h3 className="text-white text-xl font-semibold mb-2">
                    스터디 그룹 운영
                  </h3>
                  <p className="text-gray-400 mb-4">
                    주제별 소규모 스터디 그룹으로 깊이 있는 학습
                  </p>
                  <ul className="space-y-2 text-gray-300 text-sm">
                    <li>
                      • <strong>코틀린 스터디</strong>: 안드로이드 개발자를 위한
                      코틀린 학습
                    </li>
                    <li>
                      • <strong>프론트엔드 과제전형 스터디</strong>: 실전 과제
                      해결 및 코드 리뷰
                    </li>
                    <li>
                      • <strong>취업/이직에 도움되는 클라우드 스터디</strong>:
                      AWS, Azure 등 클라우드 기술 학습
                    </li>
                    <li>
                      • <strong>면접 스터디</strong>: 기술 및 인성 면접 대비
                      실전 연습
                    </li>
                  </ul>
                </div>
              </article>

              {/* 면접 질문 대응 */}
              <article className="border-white/10 bg-white/[0.03] backdrop-blur-sm shadow-lg shadow-black/30 transition-all duration-200 hover:-translate-y-1 hover:border-sky-400/40 hover:bg-white/[0.06] hover:shadow-xl hover:shadow-sky-500/10 rounded-2xl border">
                <div className="p-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-sky-500 to-indigo-600 rounded-lg flex items-center justify-center mb-4">
                    <Star className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  <h3 className="text-white text-xl font-semibold mb-2">
                    면접 질문 대응 프로그램
                  </h3>
                  <p className="text-gray-400 mb-4">
                    실제 면접 경험을 바탕으로 한 체계적인 면접 준비
                  </p>
                  <ul className="space-y-2 text-gray-300 text-sm">
                    <li>
                      • <strong>기술면접 DB</strong>: 회사별 실제 면접 질문 공유
                    </li>
                    <li>
                      • <strong>1:1 모의면접</strong>: 현직자와의 개인 면접 연습
                    </li>
                    <li>
                      • <strong>면접 후기 공유</strong>: 최신 면접 트렌드 분석
                    </li>
                    <li>
                      • <strong>답변 템플릿</strong>: 자주 나오는 질문별 답변
                      가이드
                    </li>
                  </ul>
                </div>
              </article>

              {/* 멘토링 프로그램 */}
              <article className="border-white/10 bg-white/[0.03] backdrop-blur-sm shadow-lg shadow-black/30 transition-all duration-200 hover:-translate-y-1 hover:border-sky-400/40 hover:bg-white/[0.06] hover:shadow-xl hover:shadow-sky-500/10 rounded-2xl border">
                <div className="p-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-sky-500 to-indigo-600 rounded-lg flex items-center justify-center mb-4">
                    <User className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  <h3 className="text-white text-xl font-semibold mb-2">
                    1:1 멘토링
                  </h3>
                  <p className="text-gray-400 mb-4">
                    현직 개발자와의 개인별 맞춤 멘토링
                  </p>
                  <ul className="space-y-2 text-gray-300 text-sm">
                    <li>
                      • <strong>커리어 상담</strong>: 개인별 취업 전략 수립
                    </li>
                    <li>
                      • <strong>포트폴리오 리뷰</strong>: 프로젝트 개선 방향
                      제시
                    </li>
                    <li>
                      • <strong>이력서 첨삭</strong>: 서류 통과율 향상
                    </li>
                    <li>
                      • <strong>기술 로드맵</strong>: 학습 방향 가이드
                    </li>
                  </ul>
                </div>
              </article>

              {/* 취업 정보 공유 */}
              <article className="border-white/10 bg-white/[0.03] backdrop-blur-sm shadow-lg shadow-black/30 transition-all duration-200 hover:-translate-y-1 hover:border-sky-400/40 hover:bg-white/[0.06] hover:shadow-xl hover:shadow-sky-500/10 rounded-2xl border">
                <div className="p-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-sky-500 to-indigo-600 rounded-lg flex items-center justify-center mb-4">
                    <Building
                      className="h-6 w-6 text-white"
                      aria-hidden="true"
                    />
                  </div>
                  <h3 className="text-white text-xl font-semibold mb-2">
                    취업 정보 공유
                  </h3>
                  <p className="text-gray-400 mb-4">
                    실시간 채용 정보와 취업 노하우 공유
                  </p>
                  <ul className="space-y-2 text-gray-300 text-sm">
                    <li>
                      • <strong>채용 공고 알림</strong>: 신입/경력 채용 정보
                      실시간 공유
                    </li>
                    <li>
                      • <strong>합격 후기</strong>: 실제 합격자들의 생생한
                      경험담
                    </li>
                    <li>
                      • <strong>연봉 정보</strong>: 회사별 연봉 수준과 협상 팁
                    </li>
                    <li>
                      • <strong>회사 리뷰</strong>: 실제 재직자들의 회사 문화
                      공유
                    </li>
                  </ul>
                </div>
              </article>

              {/* 프로젝트 협업 */}
              <article className="border-white/10 bg-white/[0.03] backdrop-blur-sm shadow-lg shadow-black/30 transition-all duration-200 hover:-translate-y-1 hover:border-sky-400/40 hover:bg-white/[0.06] hover:shadow-xl hover:shadow-sky-500/10 rounded-2xl border">
                <div className="p-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-sky-500 to-indigo-600 rounded-lg flex items-center justify-center mb-4">
                    <Calendar
                      className="h-6 w-6 text-white"
                      aria-hidden="true"
                    />
                  </div>
                  <h3 className="text-white text-xl font-semibold mb-2">
                    프로젝트 협업
                  </h3>
                  <p className="text-gray-400 mb-4">
                    팀 프로젝트를 통한 실무 경험 쌓기
                  </p>
                  <ul className="space-y-2 text-gray-300 text-sm">
                    <li>
                      • <strong>팀 매칭</strong>: 실력과 관심사 기반 팀 구성
                    </li>
                    <li>
                      • <strong>프로젝트 기획</strong>: 실무진의 프로젝트 기획
                      가이드
                    </li>
                    <li>
                      • <strong>코드 리뷰</strong>: 현직자들의 코드 리뷰 세션
                    </li>
                    <li>
                      • <strong>배포 지원</strong>: AWS, Vercel 등 배포 환경
                      구축
                    </li>
                  </ul>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* Recent Speakers Section */}
        <section
          id="speakers"
          className="py-20 px-4 bg-gray-800/30"
          aria-labelledby="speakers-heading"
        >
          <div className="container mx-auto">
            <div className="gcp-reveal text-center mb-16">
              <h2
                id="speakers-heading"
                className="text-3xl md:text-4xl font-bold text-white mb-4"
              >
                최근 연사 정보
              </h2>
              <p className="text-xl text-gray-300">
                실무진들의 생생한 경험담을 만나보세요
              </p>
            </div>

            <div className="gcp-reveal grid md:grid-cols-3 gap-6 mb-12">
              {speakers.map(speaker => (
                <Link href={`/speakers/${speaker.id}`} key={speaker.id}>
                  <article className="border-white/10 bg-white/[0.03] backdrop-blur-sm shadow-lg shadow-black/30 transition-all duration-200 hover:-translate-y-1 hover:border-sky-400/40 hover:bg-white/[0.06] hover:shadow-xl hover:shadow-sky-500/10 cursor-pointer h-full rounded-2xl border">
                    <div className="p-6">
                      <div className="flex items-center space-x-3 mb-4">
                        <SpeakerAvatar
                          src={speaker.avatar}
                          alt={`${speaker.name} 프로필 사진`}
                          size="sm"
                          className="border-2 border-blue-500"
                        />
                        <div>
                          <div className="font-semibold text-white">
                            {speaker.name}
                          </div>
                          <div className="text-sm text-gray-400 flex items-center">
                            <Building
                              className="h-3 w-3 mr-1"
                              aria-hidden="true"
                            />
                            {speaker.company} · {speaker.position}
                          </div>
                        </div>
                      </div>
                      <h3 className="text-lg leading-tight text-white mb-2">
                        {speaker.topic}
                      </h3>
                      <div className="flex items-center text-sm text-gray-400 mb-3">
                        <Calendar className="h-3 w-3 mr-1" aria-hidden="true" />
                        <time dateTime={speaker.date}>{speaker.date}</time>
                      </div>
                      <div className="flex flex-wrap gap-2 mb-3">
                        {speaker.tags.map((tag, tagIndex) => (
                          <Badge
                            key={tagIndex}
                            variant="secondary"
                            className="text-xs bg-blue-500/20 text-blue-300 border-blue-500/30"
                          >
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      {speaker.bio && (
                        <p className="text-sm text-gray-400 line-clamp-2">
                          {speaker.bio}
                        </p>
                      )}
                    </div>
                  </article>
                </Link>
              ))}
            </div>

            <div className="text-center">
              <Button
                variant="outline"
                size="lg"
                className="border-white/20 bg-white/5 text-white hover:bg-white/10 hover:border-white/40"
                asChild
              >
                <Link href="/speakers">
                  모든 연사 정보 보기
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Study Activities Section */}
        <section
          id="studies"
          className="py-20 px-4"
          aria-labelledby="studies-heading"
        >
          <div className="container mx-auto">
            <div className="gcp-reveal text-center mb-16">
              <h2
                id="studies-heading"
                className="text-3xl md:text-4xl font-bold text-white mb-4"
              >
                스터디 활동
              </h2>
              <p className="text-xl text-gray-300">
                함께 성장하는 개취뽀 스터디에 참여하세요
              </p>
            </div>

            {studies.length > 0 ? (
              <>
                <div className="gcp-reveal grid md:grid-cols-2 gap-6 mb-12 max-w-5xl mx-auto">
                  {studies.map(study => (
                    <Link href={`/studies/${study.id}`} key={study.id}>
                      <article className="border-white/10 bg-white/[0.03] backdrop-blur-sm shadow-lg shadow-black/30 transition-all duration-200 hover:-translate-y-1 hover:border-sky-400/40 hover:bg-white/[0.06] hover:shadow-xl hover:shadow-sky-500/10 h-full rounded-2xl border cursor-pointer">
                        <div className="p-6">
                          {/* Study Header */}
                          <div className="flex items-start justify-between mb-4">
                            <div className="flex-1">
                              <div className="flex items-center gap-2 mb-3">
                                <Badge
                                  variant="outline"
                                  className={
                                    study.status === 'active'
                                      ? 'bg-green-500/20 text-green-300 border-green-500/50'
                                      : study.status === 'recruiting'
                                        ? 'bg-blue-500/20 text-blue-300 border-blue-500/50'
                                        : 'bg-gray-500/20 text-gray-300 border-gray-500/50'
                                  }
                                >
                                  {study.status === 'active'
                                    ? '진행중'
                                    : study.status === 'recruiting'
                                      ? '모집중'
                                      : '완료'}
                                </Badge>
                                <Badge
                                  variant="outline"
                                  className="text-purple-300 border-purple-500/50 bg-purple-500/20"
                                >
                                  {study.category}
                                </Badge>
                              </div>
                              <h3 className="font-bold text-white text-xl mb-3">
                                {study.name}
                              </h3>
                            </div>
                          </div>

                          {/* Study Info */}
                          <div className="flex flex-wrap gap-x-4 gap-y-2 text-gray-300 text-sm mb-4">
                            <div className="flex items-center">
                              <Calendar
                                className="h-4 w-4 mr-2 text-blue-400"
                                aria-hidden="true"
                              />
                              <span>{study.period}</span>
                            </div>
                            <div className="flex items-center">
                              <Users
                                className="h-4 w-4 mr-2 text-blue-400"
                                aria-hidden="true"
                              />
                              <span>참여자 {study.participants}명</span>
                            </div>
                            {study.schedule && (
                              <div className="flex items-center">
                                <BookOpen
                                  className="h-4 w-4 mr-2 text-blue-400"
                                  aria-hidden="true"
                                />
                                <span>{study.schedule}</span>
                              </div>
                            )}
                          </div>

                          {/* Tags */}
                          <div className="flex flex-wrap gap-2 mb-4">
                            {study.tags.slice(0, 4).map((tag, index) => (
                              <Badge
                                key={index}
                                variant="secondary"
                                className="text-xs bg-blue-500/20 text-blue-300 border-blue-500/30"
                              >
                                {tag}
                              </Badge>
                            ))}
                          </div>

                          {/* Description */}
                          <p className="text-gray-300 text-sm leading-relaxed mb-4 line-clamp-3">
                            {study.description}
                          </p>

                          {/* Achievements */}
                          {study.achievements &&
                            study.achievements.length > 0 && (
                              <div className="mb-4 bg-gray-900/30 rounded-lg p-3">
                                <h4 className="font-medium text-white text-sm mb-2 flex items-center">
                                  <Award className="h-4 w-4 mr-1 text-yellow-400" />
                                  주요 성과
                                </h4>
                                <ul className="space-y-1">
                                  {study.achievements
                                    .slice(0, 2)
                                    .map((achievement, index) => (
                                      <li
                                        key={index}
                                        className="text-gray-400 text-xs flex items-start"
                                      >
                                        <span className="text-yellow-400 mr-2">
                                          ✓
                                        </span>
                                        <span>{achievement}</span>
                                      </li>
                                    ))}
                                </ul>
                              </div>
                            )}
                        </div>
                      </article>
                    </Link>
                  ))}
                </div>

                <div className="text-center bg-gray-800/30 rounded-xl p-8 max-w-3xl mx-auto">
                  <h3 className="text-2xl font-bold text-white mb-4">
                    스터디를 개설하고 싶으신가요?
                  </h3>
                  <p className="text-gray-300 mb-6">
                    개취뽀 커뮤니티에서 함께 공부할 멤버들을 모집해보세요.
                  </p>
                  <div className="flex flex-wrap gap-4 justify-center">
                    <a
                      href="https://open.kakao.com/o/gPI6kTUg"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-semibold">
                        카카오톡 오픈채팅
                      </Button>
                    </a>
                    <a
                      href="https://discord.gg/X74q5Yw3Sv"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button
                        variant="outline"
                        className="border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white"
                      >
                        디스코드 채널
                      </Button>
                    </a>
                  </div>
                </div>
              </>
            ) : (
              <div className="text-center py-16">
                <BookOpen className="h-16 w-16 text-gray-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-400 mb-2">
                  진행중인 스터디가 없습니다
                </h3>
                <p className="text-gray-500">
                  곧 새로운 스터디가 시작될 예정입니다. 커뮤니티 채널에서 소식을
                  확인하세요!
                </p>
              </div>
            )}
          </div>
        </section>

        {/* Community Channels Section */}
        <section
          id="community"
          className="py-20 px-4 border-y border-white/10 bg-gradient-to-b from-sky-500/[0.07] via-transparent to-transparent"
          aria-labelledby="community-heading"
        >
          <div className="container mx-auto">
            <h2 id="community-heading" className="sr-only">
              커뮤니티 채널
            </h2>
            <CommunityChannels />
          </div>
        </section>

        {/* Newsletter Section */}
        <section
          className="py-20 px-4 bg-blue-900/30"
          aria-labelledby="newsletter-heading"
        >
          <div className="container mx-auto">
            <h2 id="newsletter-heading" className="sr-only">
              뉴스레터 구독
            </h2>
            <NewsletterSubscription />
          </div>
        </section>

        {/* CTA Section */}
        <section
          className="py-20 px-4 bg-gray-800/50"
          aria-labelledby="cta-heading"
        >
          <div className="container mx-auto text-center">
            <div className="max-w-3xl mx-auto">
              <h2
                id="cta-heading"
                className="text-3xl md:text-4xl font-bold text-white mb-4"
              >
                개취뽀 연사로 참여하세요
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                여러분의 경험과 노하우를 후배 개발자들과 공유해주세요. <br />
                함께 성장하는 개발자 커뮤니티를 만들어가요.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/apply">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-sky-500 to-indigo-500 hover:from-sky-400 hover:to-indigo-400 text-white shadow-lg shadow-sky-500/25"
                  >
                    <User className="mr-2 h-4 w-4" />
                    연사 신청하기
                  </Button>
                </Link>
                <Link href="/speaker-guide">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-white/20 bg-white/5 text-white hover:bg-white/10 hover:border-white/40"
                  >
                    연사 신청 가이드 보기
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <img
                  src="/logo.png"
                  alt="개취뽀 로고"
                  className="w-8 h-8 rounded-lg"
                />
                <span className="text-xl font-bold">개취뽀</span>
              </div>
              <p className="text-gray-400">개발자 취업을 뽀개는 커뮤니티</p>
            </div>

            <div>
              <h3 className="font-semibold mb-4">커뮤니티</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link
                    href="#speakers"
                    className="hover:text-white transition-colors"
                  >
                    연사 정보
                  </Link>
                </li>
                <li>
                  <Link
                    href="#studies"
                    className="hover:text-white transition-colors"
                  >
                    스터디 활동
                  </Link>
                </li>
                <li>
                  <Link
                    href="#activities"
                    className="hover:text-white transition-colors"
                  >
                    활동 소개
                  </Link>
                </li>
                <li>
                  <Link
                    href="#community"
                    className="hover:text-white transition-colors"
                  >
                    모임 일정
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">참여하기</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link
                    href="/apply"
                    className="hover:text-white transition-colors"
                  >
                    연사 신청
                  </Link>
                </li>
                <li>
                  <a
                    href="https://open.kakao.com/o/gPI6kTUg"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors"
                  >
                    카카오톡 오픈채팅
                  </a>
                </li>
                <li>
                  <a
                    href="https://discord.gg/X74q5Yw3Sv"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors"
                  >
                    디스코드 채널
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">문의</h3>
              <ul className="space-y-2 text-gray-400">
                <li>academey@gmail.com</li>
                <li>카카오톡 오픈채팅</li>
                <li>디스코드 커뮤니티</li>
              </ul>
            </div>
          </div>

          {/* 딩코딩코 패밀리 — 연결된 3개 서비스 */}
          <EcosystemBar />

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 개취뽀. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
