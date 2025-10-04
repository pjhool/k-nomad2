import { City, Review } from '@/types';

export const cities: City[] = [
  {
    cityId: 'seoul',
    cityName: '서울',
    region: '수도권',
    heroImage: '/images/seoul-hero.jpg',
    thumbnail: '/images/seoul-thumb.jpg',
    likes: 2834,
    dislikes: 234,
    budget: 'high',
    environment: ['도심 선호', '카페 작업', '코워킹 필수'],
    bestSeason: ['봄', '가을'],
    quickInfo: {
      monthlyBudget: '300-500만원',
      recommendedStay: '1-3개월',
      tags: ['스타트업', '카페문화', '대중교통', '24시간', '글로벌']
    },
    description: '대한민국의 수도 서울은 세계적인 디지털 인프라와 활발한 스타트업 생태계를 자랑합니다. 수많은 코워킹 스페이스와 24시간 카페, 편리한 대중교통이 디지털 노마드에게 최적의 환경을 제공합니다.',
    totalReviews: 15,
    lastUpdated: '2024-01-15'
  },
  {
    cityId: 'busan',
    cityName: '부산',
    region: '경상도',
    heroImage: '/images/busan-hero.jpg',
    thumbnail: '/images/busan-thumb.jpg',
    likes: 1523,
    dislikes: 145,
    budget: 'medium',
    environment: ['자연 친화', '카페 작업'],
    bestSeason: ['여름', '가을'],
    quickInfo: {
      monthlyBudget: '250-350만원',
      recommendedStay: '2-4개월',
      tags: ['해변', '항구도시', '해산물', '온천', '야경']
    },
    description: '한국 제2의 도시 부산은 아름다운 해변과 도시의 편리함을 동시에 누릴 수 있습니다. 해운대, 광안리 등 해변 근처 카페에서 일하며 워라밸을 즐기기에 완벽한 도시입니다.',
    totalReviews: 12,
    lastUpdated: '2024-01-14'
  },
  {
    cityId: 'jeju',
    cityName: '제주',
    region: '제주도',
    heroImage: '/images/jeju-hero.jpg',
    thumbnail: '/images/jeju-thumb.jpg',
    likes: 3421,
    dislikes: 198,
    budget: 'medium',
    environment: ['자연 친화', '카페 작업'],
    bestSeason: ['봄', '여름', '가을'],
    quickInfo: {
      monthlyBudget: '250-400만원',
      recommendedStay: '1-6개월',
      tags: ['자연', '힐링', '워케이션', '서핑', '한달살기']
    },
    description: '천혜의 자연환경을 자랑하는 제주도는 한국의 대표적인 워케이션 성지입니다. 아름다운 자연 속에서 일과 휴식의 균형을 찾고자 하는 디지털 노마드들의 사랑을 받고 있습니다.',
    totalReviews: 18,
    lastUpdated: '2024-01-13'
  },
  {
    cityId: 'gangneung',
    cityName: '강릉',
    region: '강원도',
    heroImage: '/images/gangneung-hero.jpg',
    thumbnail: '/images/gangneung-thumb.jpg',
    likes: 892,
    dislikes: 67,
    budget: 'low',
    environment: ['자연 친화', '카페 작업'],
    bestSeason: ['여름', '가을'],
    quickInfo: {
      monthlyBudget: '200-300만원',
      recommendedStay: '2-3개월',
      tags: ['바다', '커피도시', '서핑', '조용함', '자연']
    },
    description: '동해의 푸른 바다와 커피 문화가 발달한 강릉은 조용하고 여유로운 워케이션을 원하는 노마드들에게 인기입니다. 유명한 커피거리와 아름다운 해변이 매력적입니다.',
    totalReviews: 8,
    lastUpdated: '2024-01-12'
  },
  {
    cityId: 'jeonju',
    cityName: '전주',
    region: '전라도',
    heroImage: '/images/jeonju-hero.jpg',
    thumbnail: '/images/jeonju-thumb.jpg',
    likes: 567,
    dislikes: 43,
    budget: 'low',
    environment: ['도심 선호', '카페 작업'],
    bestSeason: ['봄', '가을'],
    quickInfo: {
      monthlyBudget: '180-280만원',
      recommendedStay: '1-2개월',
      tags: ['한옥마을', '전통문화', '맛집', '예술', '조용함']
    },
    description: '전통과 현대가 조화를 이루는 전주는 한국의 멋을 느끼며 일할 수 있는 특별한 도시입니다. 저렴한 생활비와 맛있는 음식, 풍부한 문화 콘텐츠가 장점입니다.',
    totalReviews: 6,
    lastUpdated: '2024-01-11'
  },
  {
    cityId: 'gyeongju',
    cityName: '경주',
    region: '경상도',
    heroImage: '/images/gyeongju-hero.jpg',
    thumbnail: '/images/gyeongju-thumb.jpg',
    likes: 423,
    dislikes: 31,
    budget: 'low',
    environment: ['자연 친화', '카페 작업'],
    bestSeason: ['봄', '가을'],
    quickInfo: {
      monthlyBudget: '170-250만원',
      recommendedStay: '1-2개월',
      tags: ['역사도시', '문화유산', '조용함', '자전거', '힐링']
    },
    description: '천년 고도 경주는 도시 전체가 박물관인 특별한 곳입니다. 역사 유적지 사이에서 여유롭게 일하며 한국의 역사를 체험할 수 있는 독특한 워케이션 도시입니다.',
    totalReviews: 5,
    lastUpdated: '2024-01-10'
  },
  {
    cityId: 'daegu',
    cityName: '대구',
    region: '경상도',
    heroImage: '/images/daegu-hero.jpg',
    thumbnail: '/images/daegu-thumb.jpg',
    likes: 743,
    dislikes: 89,
    budget: 'low',
    environment: ['도심 선호', '카페 작업', '코워킹 필수'],
    bestSeason: ['봄', '가을'],
    quickInfo: {
      monthlyBudget: '200-300만원',
      recommendedStay: '2-3개월',
      tags: ['IT도시', '저렴한물가', '교통편리', '대학도시', '카페']
    },
    description: '대구는 합리적인 생활비와 발달한 IT 인프라를 갖춘 도시입니다. 많은 대학과 젊은 인구가 만들어내는 활기찬 분위기가 디지털 노마드에게 좋은 환경을 제공합니다.',
    totalReviews: 7,
    lastUpdated: '2024-01-09'
  },
  {
    cityId: 'daejeon',
    cityName: '대전',
    region: '충청도',
    heroImage: '/images/daejeon-hero.jpg',
    thumbnail: '/images/daejeon-thumb.jpg',
    likes: 389,
    dislikes: 45,
    budget: 'low',
    environment: ['도심 선호', '코워킹 필수'],
    bestSeason: ['봄', '가을'],
    quickInfo: {
      monthlyBudget: '180-280만원',
      recommendedStay: '1-3개월',
      tags: ['과학도시', '연구소', '교통중심', '조용함', '저렴함']
    },
    description: '대한민국의 과학기술 중심지 대전은 조용하고 안정적인 환경에서 집중하여 일하기 좋은 도시입니다. 전국 어디든 접근이 용이한 교통의 요충지이기도 합니다.',
    totalReviews: 4,
    lastUpdated: '2024-01-08'
  },
  {
    cityId: 'sokcho',
    cityName: '속초',
    region: '강원도',
    heroImage: '/images/sokcho-hero.jpg',
    thumbnail: '/images/sokcho-thumb.jpg',
    likes: 612,
    dislikes: 52,
    budget: 'medium',
    environment: ['자연 친화', '카페 작업'],
    bestSeason: ['여름', '가을'],
    quickInfo: {
      monthlyBudget: '200-320만원',
      recommendedStay: '1-2개월',
      tags: ['동해바다', '설악산', '해산물', '온천', '자연']
    },
    description: '설악산과 동해바다를 동시에 즐길 수 있는 속초는 자연 속에서 일하고 싶은 노마드들의 천국입니다. 최근 워케이션 인프라가 빠르게 발전하고 있는 떠오르는 도시입니다.',
    totalReviews: 6,
    lastUpdated: '2024-01-07'
  },
  {
    cityId: 'yeosu',
    cityName: '여수',
    region: '전라도',
    heroImage: '/images/yeosu-hero.jpg',
    thumbnail: '/images/yeosu-thumb.jpg',
    likes: 821,
    dislikes: 71,
    budget: 'medium',
    environment: ['자연 친화', '카페 작업'],
    bestSeason: ['봄', '여름', '가을'],
    quickInfo: {
      monthlyBudget: '200-320만원',
      recommendedStay: '1-3개월',
      tags: ['남해바다', '야경', '해산물', '섬여행', '낭만']
    },
    description: '아름다운 남해와 밤바다로 유명한 여수는 낭만적인 워케이션을 꿈꾸는 노마드들에게 인기입니다. 다양한 섬들과 맛있는 해산물이 일상에 활력을 더해줍니다.',
    totalReviews: 8,
    lastUpdated: '2024-01-06'
  }
];

export const popularCities = ['서울', '부산', '제주', '강릉', '전주', '경주'];

export const reviews: Review[] = [
  // Seoul reviews
  {
    id: '1',
    cityId: 'seoul',
    userId: 'user1',
    userName: '김개발',
    userAvatar: '/avatars/user1.jpg',
    content: '스타트업 생태계가 정말 활발하고, 네트워킹 기회가 많아요. 다만 생활비가 높은 편이라 예산 관리가 필요합니다. 24시간 카페가 많아서 밤낮없이 작업하기 좋습니다.',
    stayDuration: '3개월',
    createdAt: '2024-01-10',
    helpful: 45
  },
  {
    id: '2',
    cityId: 'seoul',
    userId: 'user2',
    userName: '박프론트',
    userAvatar: '/avatars/user2.jpg',
    content: '강남과 성수 지역의 코워킹 스페이스가 훌륭합니다. 지하철로 어디든 갈 수 있어서 편리해요. 다만 출퇴근 시간대에는 정말 복잡합니다.',
    stayDuration: '2개월',
    createdAt: '2024-01-08',
    helpful: 32
  },
  {
    id: '3',
    cityId: 'seoul',
    userId: 'user3',
    userName: '이백엔드',
    userAvatar: '/avatars/user3.jpg',
    content: '서울의 인터넷 속도는 정말 최고입니다. 카페에서도 100Mbps 이상 나와요. 글로벌 커뮤니티도 활발해서 외국인 노마드들도 많이 만날 수 있습니다.',
    stayDuration: '4개월',
    createdAt: '2024-01-05',
    helpful: 28
  },
  {
    id: '4',
    cityId: 'seoul',
    userId: 'user4',
    userName: '최디자이너',
    userAvatar: '/avatars/user4.jpg',
    content: '홍대와 이태원 지역이 특히 좋았어요. 다양한 문화를 접할 수 있고, 영감을 얻기에 완벽한 환경입니다. 다만 주말에는 너무 북적여서 작업하기 힘들어요.',
    stayDuration: '1개월',
    createdAt: '2024-01-03',
    helpful: 19
  },
  {
    id: '5',
    cityId: 'seoul',
    userId: 'user5',
    userName: '정마케터',
    userAvatar: '/avatars/user5.jpg',
    content: '서울에서의 한 달은 정말 값진 경험이었습니다. 스타트업 밋업이 거의 매일 열려서 네트워킹하기 최고예요. 생활비는 비싸지만 그만한 가치가 있습니다.',
    stayDuration: '1개월',
    createdAt: '2024-01-01',
    helpful: 15
  },
  // Jeju reviews
  {
    id: '6',
    cityId: 'jeju',
    userId: 'user6',
    userName: '한작가',
    userAvatar: '/avatars/user6.jpg',
    content: '제주에서의 한달살기는 정말 최고였어요! 바다를 보며 일하는 낭만이 있습니다. 카페도 예쁜 곳이 많고, 자연 속에서 힐링하면서 일할 수 있어요.',
    stayDuration: '1개월',
    createdAt: '2024-01-09',
    helpful: 72
  },
  {
    id: '7',
    cityId: 'jeju',
    userId: 'user7',
    userName: '송개발자',
    userAvatar: '/avatars/user7.jpg',
    content: '렌터카는 필수입니다. 하지만 그만큼 자유롭게 돌아다니며 일할 수 있어요. 오전에는 카페에서 작업하고 오후에는 해변 산책, 완벽한 워라밸입니다.',
    stayDuration: '2개월',
    createdAt: '2024-01-07',
    helpful: 58
  },
  {
    id: '8',
    cityId: 'jeju',
    userId: 'user8',
    userName: '윤사진작가',
    userAvatar: '/avatars/user8.jpg',
    content: '제주의 자연은 정말 아름답습니다. 창작 활동하기에 최고의 환경이에요. 다만 겨울 바람이 정말 세니 방한 준비 잘 하세요!',
    stayDuration: '3개월',
    createdAt: '2024-01-04',
    helpful: 43
  },
  {
    id: '9',
    cityId: 'jeju',
    userId: 'user9',
    userName: '강기획자',
    userAvatar: '/avatars/user9.jpg',
    content: '제주 한달살기 프로그램이 잘 되어있어서 쉽게 적응할 수 있었어요. 코워킹 스페이스도 늘어나고 있고, 디지털 노마드 커뮤니티도 활발합니다.',
    stayDuration: '1개월',
    createdAt: '2024-01-02',
    helpful: 37
  },
  {
    id: '10',
    cityId: 'jeju',
    userId: 'user10',
    userName: '오프리랜서',
    userAvatar: '/avatars/user10.jpg',
    content: '제주에서 6개월 지냈는데 정말 만족스러웠습니다. 사계절 내내 아름답고, 계절마다 다른 매력이 있어요. 인터넷 품질도 생각보다 좋습니다.',
    stayDuration: '6개월',
    createdAt: '2023-12-30',
    helpful: 91
  },
  // Busan reviews
  {
    id: '11',
    cityId: 'busan',
    userId: 'user11',
    userName: '서코더',
    userAvatar: '/avatars/user11.jpg',
    content: '해운대에서 작업하는 것은 정말 환상적입니다. 바다를 보며 카페에서 일하면 생산성이 오히려 올라가요. 서울보다 여유롭고 생활비도 저렴합니다.',
    stayDuration: '2개월',
    createdAt: '2024-01-11',
    helpful: 56
  },
  {
    id: '12',
    cityId: 'busan',
    userId: 'user12',
    userName: '남개발',
    userAvatar: '/avatars/user12.jpg',
    content: '광안리 해변 근처 카페들이 정말 좋아요. 밤에는 광안대교 야경을 보며 산책할 수 있고, 해산물도 신선하고 맛있습니다. 강력 추천합니다!',
    stayDuration: '3개월',
    createdAt: '2024-01-06',
    helpful: 48
  },
  {
    id: '13',
    cityId: 'busan',
    userId: 'user13',
    userName: '조디자이너',
    userAvatar: '/avatars/user13.jpg',
    content: '부산의 여유로운 분위기가 정말 좋습니다. 서울처럼 복잡하지 않고, 사람들도 친절해요. 온천도 많아서 작업 후 힐링하기 좋습니다.',
    stayDuration: '1개월',
    createdAt: '2024-01-03',
    helpful: 34
  },
  // Gangneung reviews
  {
    id: '14',
    cityId: 'gangneung',
    userId: 'user14',
    userName: '전바리스타',
    userAvatar: '/avatars/user14.jpg',
    content: '커피의 도시 강릉! 정말 카페가 곳곳에 있고 모두 퀄리티가 높습니다. 조용하고 평화로워서 집중해서 일하기 딱 좋아요. 커피 애호가라면 강릉은 천국입니다.',
    stayDuration: '2개월',
    createdAt: '2024-01-08',
    helpful: 41
  },
  {
    id: '15',
    cityId: 'gangneung',
    userId: 'user15',
    userName: '배서퍼',
    userAvatar: '/avatars/user15.jpg',
    content: '아침에 서핑하고 오후에 카페에서 작업하는 루틴이 정말 좋았어요. 동해 바다가 아름답고, 사람들이 많지 않아서 여유롭습니다.',
    stayDuration: '1개월',
    createdAt: '2024-01-04',
    helpful: 29
  },
  // Jeonju reviews
  {
    id: '16',
    cityId: 'jeonju',
    userId: 'user16',
    userName: '문작가',
    userAvatar: '/avatars/user16.jpg',
    content: '전주 한옥마을에서의 작업은 정말 특별한 경험이었어요. 한국의 전통미를 느끼며 일할 수 있고, 맛집이 정말 많습니다. 생활비도 저렴해서 장기체류하기 좋아요.',
    stayDuration: '2개월',
    createdAt: '2024-01-05',
    helpful: 38
  },
  // Daegu reviews
  {
    id: '17',
    cityId: 'daegu',
    userId: 'user17',
    userName: '황개발자',
    userAvatar: '/avatars/user17.jpg',
    content: '대구는 정말 가성비가 좋은 도시입니다. 인터넷 인프라도 훌륭하고, 생활비가 저렴해서 오래 머물기 좋아요. 대학가 근처 카페들이 특히 마음에 들었습니다.',
    stayDuration: '3개월',
    createdAt: '2024-01-02',
    helpful: 27
  },
  // Yeosu reviews
  {
    id: '18',
    cityId: 'yeosu',
    userId: 'user18',
    userName: '임사진작가',
    userAvatar: '/avatars/user18.jpg',
    content: '여수의 밤바다는 정말 아름답습니다. 낭만적인 분위기에서 일하고 싶다면 여수를 추천해요. 케이블카 타고 올라가면 정말 멋진 뷰를 볼 수 있습니다.',
    stayDuration: '1개월',
    createdAt: '2023-12-28',
    helpful: 33
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
