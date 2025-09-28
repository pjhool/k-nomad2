import { City, Review } from '@/types';

export const cities: City[] = [
  {
    cityId: 'seoul',
    cityName: '서울',
    region: '수도권',
    heroImage: '/images/seoul-hero.jpg',
    thumbnail: '/images/seoul-thumb.jpg',
    ratings: {
      overall: 4.7,
      workEnvironment: 4.8,
      livingCost: 3.2,
      internetQuality: 4.9,
      cafeInfra: 4.9,
      community: 4.6
    },
    quickInfo: {
      monthlyBudget: '300-500만원',
      recommendedStay: '1-3개월',
      tags: ['스타트업', '카페문화', '대중교통', '24시간', '글로벌']
    },
    description: '대한민국의 수도 서울은 세계적인 디지털 인프라와 활발한 스타트업 생태계를 자랑합니다. 수많은 코워킹 스페이스와 24시간 카페, 편리한 대중교통이 디지털 노마드에게 최적의 환경을 제공합니다.',
    totalReviews: 2834,
    lastUpdated: '2024-01-15'
  },
  {
    cityId: 'busan',
    cityName: '부산',
    region: '영남',
    heroImage: '/images/busan-hero.jpg',
    thumbnail: '/images/busan-thumb.jpg',
    ratings: {
      overall: 4.5,
      workEnvironment: 4.3,
      livingCost: 3.8,
      internetQuality: 4.7,
      cafeInfra: 4.2,
      community: 4.4
    },
    quickInfo: {
      monthlyBudget: '250-350만원',
      recommendedStay: '2-4개월',
      tags: ['해변', '항구도시', '해산물', '온천', '야경']
    },
    description: '한국 제2의 도시 부산은 아름다운 해변과 도시의 편리함을 동시에 누릴 수 있습니다. 해운대, 광안리 등 해변 근처 카페에서 일하며 워라밸을 즐기기에 완벽한 도시입니다.',
    totalReviews: 1523,
    lastUpdated: '2024-01-14'
  },
  {
    cityId: 'jeju',
    cityName: '제주',
    region: '제주',
    heroImage: '/images/jeju-hero.jpg',
    thumbnail: '/images/jeju-thumb.jpg',
    ratings: {
      overall: 4.9,
      workEnvironment: 4.6,
      livingCost: 3.5,
      internetQuality: 4.3,
      cafeInfra: 4.5,
      community: 4.8
    },
    quickInfo: {
      monthlyBudget: '250-400만원',
      recommendedStay: '1-6개월',
      tags: ['자연', '힐링', '워케이션', '서핑', '한달살기']
    },
    description: '천혜의 자연환경을 자랑하는 제주도는 한국의 대표적인 워케이션 성지입니다. 아름다운 자연 속에서 일과 휴식의 균형을 찾고자 하는 디지털 노마드들의 사랑을 받고 있습니다.',
    totalReviews: 3421,
    lastUpdated: '2024-01-13'
  },
  {
    cityId: 'gangneung',
    cityName: '강릉',
    region: '강원',
    heroImage: '/images/gangneung-hero.jpg',
    thumbnail: '/images/gangneung-thumb.jpg',
    ratings: {
      overall: 4.6,
      workEnvironment: 4.4,
      livingCost: 4.2,
      internetQuality: 4.5,
      cafeInfra: 4.7,
      community: 4.3
    },
    quickInfo: {
      monthlyBudget: '200-300만원',
      recommendedStay: '2-3개월',
      tags: ['바다', '커피도시', '서핑', '조용함', '자연']
    },
    description: '동해의 푸른 바다와 커피 문화가 발달한 강릉은 조용하고 여유로운 워케이션을 원하는 노마드들에게 인기입니다. 유명한 커피거리와 아름다운 해변이 매력적입니다.',
    totalReviews: 892,
    lastUpdated: '2024-01-12'
  },
  {
    cityId: 'jeonju',
    cityName: '전주',
    region: '호남',
    heroImage: '/images/jeonju-hero.jpg',
    thumbnail: '/images/jeonju-thumb.jpg',
    ratings: {
      overall: 4.4,
      workEnvironment: 4.2,
      livingCost: 4.5,
      internetQuality: 4.6,
      cafeInfra: 4.1,
      community: 4.2
    },
    quickInfo: {
      monthlyBudget: '180-280만원',
      recommendedStay: '1-2개월',
      tags: ['한옥마을', '전통문화', '맛집', '예술', '조용함']
    },
    description: '전통과 현대가 조화를 이루는 전주는 한국의 멋을 느끼며 일할 수 있는 특별한 도시입니다. 저렴한 생활비와 맛있는 음식, 풍부한 문화 콘텐츠가 장점입니다.',
    totalReviews: 567,
    lastUpdated: '2024-01-11'
  },
  {
    cityId: 'gyeongju',
    cityName: '경주',
    region: '영남',
    heroImage: '/images/gyeongju-hero.jpg',
    thumbnail: '/images/gyeongju-thumb.jpg',
    ratings: {
      overall: 4.3,
      workEnvironment: 4.0,
      livingCost: 4.6,
      internetQuality: 4.4,
      cafeInfra: 3.9,
      community: 4.0
    },
    quickInfo: {
      monthlyBudget: '170-250만원',
      recommendedStay: '1-2개월',
      tags: ['역사도시', '문화유산', '조용함', '자전거', '힐링']
    },
    description: '천년 고도 경주는 도시 전체가 박물관인 특별한 곳입니다. 역사 유적지 사이에서 여유롭게 일하며 한국의 역사를 체험할 수 있는 독특한 워케이션 도시입니다.',
    totalReviews: 423,
    lastUpdated: '2024-01-10'
  },
  {
    cityId: 'daegu',
    cityName: '대구',
    region: '영남',
    heroImage: '/images/daegu-hero.jpg',
    thumbnail: '/images/daegu-thumb.jpg',
    ratings: {
      overall: 4.2,
      workEnvironment: 4.3,
      livingCost: 4.0,
      internetQuality: 4.7,
      cafeInfra: 4.1,
      community: 4.0
    },
    quickInfo: {
      monthlyBudget: '200-300만원',
      recommendedStay: '2-3개월',
      tags: ['IT도시', '저렴한물가', '교통편리', '대학도시', '카페']
    },
    description: '대구는 합리적인 생활비와 발달한 IT 인프라를 갖춘 도시입니다. 많은 대학과 젊은 인구가 만들어내는 활기찬 분위기가 디지털 노마드에게 좋은 환경을 제공합니다.',
    totalReviews: 743,
    lastUpdated: '2024-01-09'
  },
  {
    cityId: 'daejeon',
    cityName: '대전',
    region: '충청',
    heroImage: '/images/daejeon-hero.jpg',
    thumbnail: '/images/daejeon-thumb.jpg',
    ratings: {
      overall: 4.1,
      workEnvironment: 4.4,
      livingCost: 4.2,
      internetQuality: 4.8,
      cafeInfra: 4.0,
      community: 3.9
    },
    quickInfo: {
      monthlyBudget: '180-280만원',
      recommendedStay: '1-3개월',
      tags: ['과학도시', '연구소', '교통중심', '조용함', '저렴함']
    },
    description: '대한민국의 과학기술 중심지 대전은 조용하고 안정적인 환경에서 집중하여 일하기 좋은 도시입니다. 전국 어디든 접근이 용이한 교통의 요충지이기도 합니다.',
    totalReviews: 389,
    lastUpdated: '2024-01-08'
  },
  {
    cityId: 'sokcho',
    cityName: '속초',
    region: '강원',
    heroImage: '/images/sokcho-hero.jpg',
    thumbnail: '/images/sokcho-thumb.jpg',
    ratings: {
      overall: 4.5,
      workEnvironment: 4.2,
      livingCost: 3.9,
      internetQuality: 4.4,
      cafeInfra: 4.3,
      community: 4.1
    },
    quickInfo: {
      monthlyBudget: '200-320만원',
      recommendedStay: '1-2개월',
      tags: ['동해바다', '설악산', '해산물', '온천', '자연']
    },
    description: '설악산과 동해바다를 동시에 즐길 수 있는 속초는 자연 속에서 일하고 싶은 노마드들의 천국입니다. 최근 워케이션 인프라가 빠르게 발전하고 있는 떠오르는 도시입니다.',
    totalReviews: 612,
    lastUpdated: '2024-01-07'
  },
  {
    cityId: 'yeosu',
    cityName: '여수',
    region: '호남',
    heroImage: '/images/yeosu-hero.jpg',
    thumbnail: '/images/yeosu-thumb.jpg',
    ratings: {
      overall: 4.4,
      workEnvironment: 4.1,
      livingCost: 3.8,
      internetQuality: 4.5,
      cafeInfra: 4.2,
      community: 4.3
    },
    quickInfo: {
      monthlyBudget: '200-320만원',
      recommendedStay: '1-3개월',
      tags: ['남해바다', '야경', '해산물', '섬여행', '낭만']
    },
    description: '아름다운 남해와 밤바다로 유명한 여수는 낭만적인 워케이션을 꿈꾸는 노마드들에게 인기입니다. 다양한 섬들과 맛있는 해산물이 일상에 활력을 더해줍니다.',
    totalReviews: 821,
    lastUpdated: '2024-01-06'
  }
];

export const popularCities = ['서울', '부산', '제주', '강릉', '전주', '경주'];

export const reviews: Review[] = [
  {
    id: '1',
    cityId: 'seoul',
    userId: 'user1',
    userName: '김개발',
    userAvatar: '/avatars/user1.jpg',
    rating: 5,
    pros: ['최고의 인프라', '다양한 네트워킹', '24시간 카페'],
    cons: ['높은 생활비', '복잡한 교통'],
    comment: '스타트업 생태계가 정말 활발하고, 네트워킹 기회가 많아요. 다만 생활비가 높은 편이라 예산 관리가 필요합니다.',
    stayDuration: '3개월',
    createdAt: '2024-01-10',
    helpful: 45
  },
  {
    id: '2',
    cityId: 'jeju',
    userId: 'user2',
    userName: '이디자인',
    userAvatar: '/avatars/user2.jpg',
    rating: 5,
    pros: ['아름다운 자연', '워라밸', '힐링'],
    cons: ['렌터카 필요', '겨울 날씨'],
    comment: '제주에서의 한달살기는 정말 최고였어요! 바다를 보며 일하는 낭만이 있습니다. 카페도 예쁜 곳이 많아요.',
    stayDuration: '1개월',
    createdAt: '2024-01-09',
    helpful: 72
  }
];

export const filterOptions = {
  budgetRanges: [
    { label: '150만원 이하', value: 'under150' },
    { label: '150-250만원', value: '150to250' },
    { label: '250-350만원', value: '250to350' },
    { label: '350만원 이상', value: 'over350' }
  ],
  stayDurations: [
    { label: '1개월 미만', value: 'under1month' },
    { label: '1-3개월', value: '1to3months' },
    { label: '3-6개월', value: '3to6months' },
    { label: '6개월 이상', value: 'over6months' }
  ],
  interests: [
    { label: '자연/힐링', value: 'nature' },
    { label: '문화/예술', value: 'culture' },
    { label: '스타트업', value: 'startup' },
    { label: '커뮤니티', value: 'community' },
    { label: '서핑/스포츠', value: 'sports' }
  ],
  infrastructure: [
    { label: '고속 인터넷', value: 'internet' },
    { label: '24시간 카페', value: '24hcafe' },
    { label: '코워킹 스페이스', value: 'coworking' },
    { label: '대중교통', value: 'transport' },
    { label: '편의시설', value: 'convenience' }
  ]
};