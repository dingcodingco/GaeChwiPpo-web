'use client';
import { EcosystemBar } from '@/components/ecosystem-bar';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { submitSponsorApplication } from '@/app/actions/sponsor-application';
import { useActionState } from 'react';
import {
  Loader2,
  Building,
  Heart,
  CheckCircle,
  ArrowLeft,
  User,
} from 'lucide-react';
import Link from 'next/link';

interface FormData {
  // 회사 정보
  companyName: string;
  companySize: string;
  industry: string;
  website: string;
  // 담당자 정보
  contactName: string;
  contactEmail: string;
  contactPhone: string;
  contactPosition: string;
  // 후원 정보
  sponsorType: string[];
  sponsorAmount: string;
  sponsorPeriod: string;
  // 추가 정보
  motivation: string;
  additionalInfo: string;
  // 동의 사항
  agreements: {
    privacy: boolean;
    promotion: boolean;
    contact: boolean;
  };
}

const initialFormData: FormData = {
  companyName: '',
  companySize: '',
  industry: '',
  website: '',
  contactName: '',
  contactEmail: '',
  contactPhone: '',
  contactPosition: '',
  sponsorType: [],
  sponsorAmount: '',
  sponsorPeriod: '',
  motivation: '',
  additionalInfo: '',
  agreements: {
    privacy: false,
    promotion: false,
    contact: false,
  },
};

const sponsorTypeOptions = [
  {
    id: 'money',
    label:
      (
        <span aria-label="금전 후원" role="img">
          💰
        </span>
      ) + ' 금전 후원',
    description: '모임 운영비, 장소 대관비 등',
  },
  {
    id: 'venue',
    label:
      (
        <span aria-label="장소 후원" role="img">
          🏢
        </span>
      ) + ' 장소 후원',
    description: '세미나실, 회의실 등 공간 제공',
  },
  {
    id: 'goods',
    label:
      (
        <span aria-label="굿즈 후원" role="img">
          🎁
        </span>
      ) + ' 굿즈 후원',
    description: '기념품, 상품, 다과 등 제공',
  },
  {
    id: 'speaker',
    label:
      (
        <span aria-label="연사 후원" role="img">
          👨‍💼
        </span>
      ) + ' 연사 후원',
    description: '임직원의 연사 참여 및 노하우 공유',
  },
  {
    id: 'tech',
    label:
      (
        <span aria-label="기술 후원" role="img">
          💻
        </span>
      ) + ' 기술 후원',
    description: '개발 도구, 서비스 크레딧 등 제공',
  },
  {
    id: 'other',
    label:
      (
        <span aria-label="기타" role="img">
          ✨
        </span>
      ) + ' 기타',
    description: '위에 해당하지 않는 후원 방식',
  },
];

export default function SponsorApplicationPage() {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [state, formAction, isPending] = useActionState(
    submitSponsorApplication,
    null,
  );

  const updateFormData = (
    field: string,
    value: string | boolean | string[],
  ) => {
    setFormData(prev => ({
      ...prev,
      [field]: value,
    }));
  };

  const updateNestedFormData = <T extends keyof FormData>(
    parent: T,
    field: keyof FormData[T] & string,
    value: string | boolean,
  ) => {
    setFormData(prev => ({
      ...prev,
      [parent]: {
        ...(prev[parent] as object),
        [field]: value,
      },
    }));
  };

  const toggleSponsorType = (type: string) => {
    setFormData(prev => {
      const newSponsorTypes = prev.sponsorType.includes(type)
        ? prev.sponsorType.filter(t => t !== type)
        : [...prev.sponsorType, type];
      return {
        ...prev,
        sponsorType: newSponsorTypes,
      };
    });
  };

  const isFormValid = () => {
    return (
      formData.companyName &&
      formData.contactName &&
      formData.contactEmail &&
      formData.contactPhone &&
      formData.sponsorType.length > 0 &&
      formData.motivation &&
      formData.agreements.privacy &&
      formData.agreements.promotion &&
      formData.agreements.contact
    );
  };

  if (state?.success) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-blue-900 flex items-center justify-center">
        <Card className="bg-gray-800/50 border-gray-700 shadow-xl max-w-2xl mx-4">
          <CardContent className="p-12 text-center">
            <div className="flex items-center justify-center mb-6">
              <div className="relative">
                <CheckCircle className="h-16 w-16 text-green-500" />
                <Heart className="h-6 w-6 text-pink-400 absolute -bottom-1 -right-1 bg-gray-800 rounded-full p-1" />
              </div>
            </div>
            <h2 className="text-2xl font-bold text-white mb-4">
              후원 신청이 완료되었습니다!
            </h2>
            <p className="text-gray-300 mb-2">
              후원 신청해주셔서 감사합니다. <br />
              개취뽀 커뮤니티 발전에 함께해주셔서 진심으로 감사드립니다.
            </p>
            {state.applicationId && (
              <p className="text-sm text-gray-400 mb-6">
                신청 ID: {state.applicationId}
              </p>
            )}
            <p className="text-gray-300 mb-6">
              검토 후 3일 내에 연락드리겠습니다.
            </p>
            <Button
              onClick={() => {
                window.location.href = '/';
              }}
              className="bg-gradient-to-r from-pink-600 to-pink-500 hover:from-pink-700 hover:to-pink-600"
            >
              홈으로 돌아가기
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-blue-900">
      {/* Header */}
      <header className="border-b border-gray-800 bg-gray-900/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Link href="/">
                <img
                  src="/logo.png"
                  alt="개취뽀"
                  className="w-10 h-10 rounded-lg"
                />
              </Link>
              <span className="text-xl font-bold text-white">개취뽀</span>
            </div>
            <nav className="hidden md:flex items-center space-x-6">
              <Link
                href="/#speakers"
                className="text-gray-300 hover:text-white transition-colors"
              >
                연사 정보
              </Link>
              <Link
                href="/#activities"
                className="text-gray-300 hover:text-white transition-colors"
              >
                활동 소개
              </Link>
              <Link
                href="/#community"
                className="text-gray-300 hover:text-white transition-colors"
              >
                커뮤니티 채널
              </Link>
              <Link
                href="/#sponsors"
                className="text-gray-300 hover:text-white transition-colors"
              >
                후원
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Back Button */}
      <div className="container mx-auto px-4 py-6">
        <Link href="/">
          <Button variant="ghost" className="text-gray-400 hover:text-white">
            <ArrowLeft className="mr-2 h-4 w-4" />
            홈으로 돌아가기
          </Button>
        </Link>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              후원 신청
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              개취뽀와 함께 개발자 커뮤니티의 성장에 기여해주세요
            </p>
            <div className="bg-pink-500/10 border border-pink-500/20 rounded-lg p-6 text-left">
              <h2 className="text-lg font-semibold text-pink-300 mb-3">
                💝 후원 혜택
              </h2>
              <ul className="text-gray-300 space-y-2">
                <li>• 모든 모임에서 브랜드 노출 및 회사 소개</li>
                <li>• 우수 인재 추천 및 채용 공고 우선 노출</li>
                <li>• 회사 기술 스택 소개 세션 기회 제공</li>
                <li>• 임직원 대상 특별 네트워킹 이벤트</li>
                <li>• 개취뽀 공식 후원사 인증서 발급</li>
              </ul>
            </div>
          </div>

          {/* Application Form */}
          <form action={formAction}>
            <div className="space-y-8">
              {/* 회사 정보 */}
              <Card className="bg-gray-800/50 border-gray-700 shadow-xl">
                <CardHeader>
                  <div className="flex items-center space-x-2">
                    <Building className="h-5 w-5 text-pink-400" />
                    <CardTitle className="text-white">회사 정보</CardTitle>
                  </div>
                  <CardDescription className="text-gray-400">
                    후원하실 회사의 기본 정보를 입력해주세요
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="companyName" className="text-gray-300">
                        회사명 *
                      </Label>
                      <Input
                        id="companyName"
                        name="companyName"
                        value={formData.companyName}
                        onChange={e =>
                          updateFormData('companyName', e.target.value)
                        }
                        className="bg-gray-700/50 border-gray-600 text-white"
                        placeholder="(주)개발회사"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="companySize" className="text-gray-300">
                        회사 규모
                      </Label>
                      <Select
                        name="companySize"
                        onValueChange={value =>
                          updateFormData('companySize', value)
                        }
                      >
                        <SelectTrigger className="bg-gray-700/50 border-gray-600 text-white focus:ring-blue-500 focus:border-blue-500">
                          <SelectValue placeholder="회사 규모를 선택해주세요" />
                        </SelectTrigger>
                        <SelectContent className="bg-gray-800 border-gray-600 text-white">
                          <SelectItem
                            value="startup"
                            className="text-white hover:bg-gray-700"
                          >
                            스타트업 (1-50명)
                          </SelectItem>
                          <SelectItem
                            value="medium"
                            className="text-white hover:bg-gray-700"
                          >
                            중견기업 (51-300명)
                          </SelectItem>
                          <SelectItem
                            value="large"
                            className="text-white hover:bg-gray-700"
                          >
                            대기업 (301명 이상)
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="industry" className="text-gray-300">
                        업종
                      </Label>
                      <Input
                        id="industry"
                        name="industry"
                        value={formData.industry}
                        onChange={e =>
                          updateFormData('industry', e.target.value)
                        }
                        className="bg-gray-700/50 border-gray-600 text-white"
                        placeholder="IT 서비스, 핀테크, 게임 등"
                      />
                    </div>
                    <div>
                      <Label htmlFor="website" className="text-gray-300">
                        회사 웹사이트
                      </Label>
                      <Input
                        id="website"
                        name="website"
                        type="url"
                        value={formData.website}
                        onChange={e =>
                          updateFormData('website', e.target.value)
                        }
                        className="bg-gray-700/50 border-gray-600 text-white"
                        placeholder="https://company.com"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* 담당자 정보 */}
              <Card className="bg-gray-800/50 border-gray-700 shadow-xl">
                <CardHeader>
                  <div className="flex items-center space-x-2">
                    <User className="h-5 w-5 text-pink-400" />
                    <CardTitle className="text-white">담당자 정보</CardTitle>
                  </div>
                  <CardDescription className="text-gray-400">
                    후원 관련 연락을 받으실 담당자 정보를 입력해주세요
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="contactName" className="text-gray-300">
                        담당자명 *
                      </Label>
                      <Input
                        id="contactName"
                        name="contactName"
                        value={formData.contactName}
                        onChange={e =>
                          updateFormData('contactName', e.target.value)
                        }
                        className="bg-gray-700/50 border-gray-600 text-white"
                        placeholder="홍길동"
                        required
                      />
                    </div>
                    <div>
                      <Label
                        htmlFor="contactPosition"
                        className="text-gray-300"
                      >
                        직책
                      </Label>
                      <Input
                        id="contactPosition"
                        name="contactPosition"
                        value={formData.contactPosition}
                        onChange={e =>
                          updateFormData('contactPosition', e.target.value)
                        }
                        className="bg-gray-700/50 border-gray-600 text-white"
                        placeholder="마케팅 매니저"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="contactEmail" className="text-gray-300">
                        이메일 *
                      </Label>
                      <Input
                        id="contactEmail"
                        name="contactEmail"
                        type="email"
                        value={formData.contactEmail}
                        onChange={e =>
                          updateFormData('contactEmail', e.target.value)
                        }
                        className="bg-gray-700/50 border-gray-600 text-white"
                        placeholder="contact@company.com"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="contactPhone" className="text-gray-300">
                        연락처 *
                      </Label>
                      <Input
                        id="contactPhone"
                        name="contactPhone"
                        value={formData.contactPhone}
                        onChange={e =>
                          updateFormData('contactPhone', e.target.value)
                        }
                        className="bg-gray-700/50 border-gray-600 text-white"
                        placeholder="010-1234-5678"
                        required
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* 후원 정보 */}
              <Card className="bg-gray-800/50 border-gray-700 shadow-xl">
                <CardHeader>
                  <div className="flex items-center space-x-2">
                    <Heart className="h-5 w-5 text-pink-400" />
                    <CardTitle className="text-white">후원 정보</CardTitle>
                  </div>
                  <CardDescription className="text-gray-400">
                    후원 방식과 규모를 선택해주세요
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <Label className="text-gray-300 mb-4 block">
                      후원 방식 * (복수 선택 가능)
                    </Label>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {sponsorTypeOptions.map(option => (
                        <div
                          key={option.id}
                          className={`p-4 border rounded-lg cursor-pointer transition-all ${
                            formData.sponsorType.includes(option.id)
                              ? 'border-pink-500 bg-pink-500/10'
                              : 'border-gray-600 hover:border-gray-500'
                          }`}
                          onClick={() => toggleSponsorType(option.id)}
                        >
                          <div className="flex items-start space-x-3">
                            <Checkbox
                              id={`checkbox-${option.id}`}
                              checked={formData.sponsorType.includes(option.id)}
                              onCheckedChange={() =>
                                toggleSponsorType(option.id)
                              }
                              className="mt-1"
                            />
                            <div>
                              <h4 className="font-medium text-white">
                                {option.label}
                              </h4>
                              <p className="text-sm text-gray-400">
                                {option.description}
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                    <input
                      type="hidden"
                      name="sponsorType"
                      value={JSON.stringify(formData.sponsorType)}
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="sponsorAmount" className="text-gray-300">
                        후원 규모 (금전 후원 시)
                      </Label>
                      <Select
                        name="sponsorAmount"
                        onValueChange={value =>
                          updateFormData('sponsorAmount', value)
                        }
                      >
                        <SelectTrigger className="bg-gray-700/50 border-gray-600 text-white focus:ring-blue-500 focus:border-blue-500">
                          <SelectValue placeholder="후원 규모를 선택해주세요" />
                        </SelectTrigger>
                        <SelectContent className="bg-gray-800 border-gray-600 text-white">
                          <SelectItem
                            value="100-300"
                            className="text-white hover:bg-gray-700"
                          >
                            100만원 - 300만원
                          </SelectItem>
                          <SelectItem
                            value="300-500"
                            className="text-white hover:bg-gray-700"
                          >
                            300만원 - 500만원
                          </SelectItem>
                          <SelectItem
                            value="500-1000"
                            className="text-white hover:bg-gray-700"
                          >
                            500만원 - 1,000만원
                          </SelectItem>
                          <SelectItem
                            value="1000+"
                            className="text-white hover:bg-gray-700"
                          >
                            1,000만원 이상
                          </SelectItem>
                          <SelectItem
                            value="discuss"
                            className="text-white hover:bg-gray-700"
                          >
                            협의
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="sponsorPeriod" className="text-gray-300">
                        후원 기간
                      </Label>
                      <Select
                        name="sponsorPeriod"
                        onValueChange={value =>
                          updateFormData('sponsorPeriod', value)
                        }
                      >
                        <SelectTrigger className="bg-gray-700/50 border-gray-600 text-white focus:ring-blue-500 focus:border-blue-500">
                          <SelectValue placeholder="후원 기간을 선택해주세요" />
                        </SelectTrigger>
                        <SelectContent className="bg-gray-800 border-gray-600 text-white">
                          <SelectItem
                            value="1-time"
                            className="text-white hover:bg-gray-700"
                          >
                            일회성
                          </SelectItem>
                          <SelectItem
                            value="3-months"
                            className="text-white hover:bg-gray-700"
                          >
                            3개월
                          </SelectItem>
                          <SelectItem
                            value="6-months"
                            className="text-white hover:bg-gray-700"
                          >
                            6개월
                          </SelectItem>
                          <SelectItem
                            value="1-year"
                            className="text-white hover:bg-gray-700"
                          >
                            1년
                          </SelectItem>
                          <SelectItem
                            value="long-term"
                            className="text-white hover:bg-gray-700"
                          >
                            장기 협력
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* 추가 정보 */}
              <Card className="bg-gray-800/50 border-gray-700 shadow-xl">
                <CardHeader>
                  <CardTitle className="text-white">추가 정보</CardTitle>
                  <CardDescription className="text-gray-400">
                    후원 동기와 추가로 전달하고 싶은 내용을 작성해주세요
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="motivation" className="text-gray-300">
                      후원 동기 *
                    </Label>
                    <Textarea
                      id="motivation"
                      name="motivation"
                      value={formData.motivation}
                      onChange={e =>
                        updateFormData('motivation', e.target.value)
                      }
                      className="bg-gray-700/50 border-gray-600 text-white min-h-[120px]"
                      placeholder="개취뽀를 후원하고 싶은 이유와 기대하는 효과를 작성해주세요."
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="additionalInfo" className="text-gray-300">
                      기타 사항
                    </Label>
                    <Textarea
                      id="additionalInfo"
                      name="additionalInfo"
                      value={formData.additionalInfo}
                      onChange={e =>
                        updateFormData('additionalInfo', e.target.value)
                      }
                      className="bg-gray-700/50 border-gray-600 text-white"
                      placeholder="추가로 전달하고 싶은 내용이나 요청사항이 있다면 작성해주세요."
                    />
                  </div>
                </CardContent>
              </Card>

              {/* 동의 사항 */}
              <Card className="bg-gray-800/50 border-gray-700 shadow-xl">
                <CardHeader>
                  <CardTitle className="text-white">동의 사항</CardTitle>
                  <CardDescription className="text-gray-400">
                    아래 사항에 동의해주세요
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-start space-x-2">
                      <Checkbox
                        id="privacy"
                        checked={formData.agreements.privacy}
                        onCheckedChange={checked =>
                          updateNestedFormData(
                            'agreements',
                            'privacy',
                            !!checked,
                          )
                        }
                        className="border-gray-600 mt-1"
                      />
                      <Label
                        htmlFor="privacy"
                        className="text-gray-300 leading-relaxed"
                      >
                        개인정보 수집 및 이용에 동의합니다. (후원 관련 업무 처리
                        목적으로만 사용됩니다)
                      </Label>
                    </div>
                    <div className="flex items-start space-x-2">
                      <Checkbox
                        id="promotion"
                        checked={formData.agreements.promotion}
                        onCheckedChange={checked =>
                          updateNestedFormData(
                            'agreements',
                            'promotion',
                            !!checked,
                          )
                        }
                        className="border-gray-600 mt-1"
                      />
                      <Label
                        htmlFor="promotion"
                        className="text-gray-300 leading-relaxed"
                      >
                        회사명 및 로고의 홍보 목적 사용에 동의합니다. (모임
                        자료, 웹사이트 등에 후원사로 표기)
                      </Label>
                    </div>
                    <div className="flex items-start space-x-2">
                      <Checkbox
                        id="contact"
                        checked={formData.agreements.contact}
                        onCheckedChange={checked =>
                          updateNestedFormData(
                            'agreements',
                            'contact',
                            !!checked,
                          )
                        }
                        className="border-gray-600 mt-1"
                      />
                      <Label
                        htmlFor="contact"
                        className="text-gray-300 leading-relaxed"
                      >
                        후원 관련 연락 및 커뮤니티 소식 수신에 동의합니다.
                      </Label>
                    </div>
                  </div>
                  <input
                    type="hidden"
                    name="agreements"
                    value={JSON.stringify(formData.agreements)}
                  />
                </CardContent>
              </Card>

              {/* 제출 버튼 */}
              <div className="text-center">
                {state?.error && (
                  <div className="mb-4 p-4 bg-red-500/10 border border-red-500/20 rounded-lg">
                    <p className="text-red-400">{state.error}</p>
                  </div>
                )}
                <Button
                  type="submit"
                  disabled={!isFormValid() || isPending}
                  className="bg-gradient-to-r from-pink-600 to-pink-500 hover:from-pink-700 hover:to-pink-600 text-white px-8 py-3 text-lg disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isPending ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      신청 중...
                    </>
                  ) : (
                    <>
                      <Heart className="mr-2 h-4 w-4" />
                      후원 신청하기
                    </>
                  )}
                </Button>
                <p className="text-gray-400 text-sm mt-2">
                  * 표시된 항목은 필수 입력 사항입니다
                </p>
              </div>
            </div>
          </form>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 mt-16">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <img
                  src="/logo.png"
                  alt="개취뽀"
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
                    href="/#speakers"
                    className="hover:text-white transition-colors"
                  >
                    연사 정보
                  </Link>
                </li>
                <li>
                  <Link
                    href="/#activities"
                    className="hover:text-white transition-colors"
                  >
                    활동 소개
                  </Link>
                </li>
                <li>
                  <Link
                    href="/#community"
                    className="hover:text-white transition-colors"
                  >
                    커뮤니티 채널
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
                  <Link
                    href="/sponsor-apply"
                    className="hover:text-white transition-colors"
                  >
                    후원 신청
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
