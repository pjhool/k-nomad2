'use server';

import { reviews } from '@/lib/dummy-data';
import { revalidatePath } from 'next/cache';

export interface CreateReviewInput {
  cityId: string;
  userId: string;
  userName: string;
  userAvatar: string;
  content: string;
  stayDuration: string;
}

export async function getReviews(cityId: string) {
  return reviews.filter((r) => r.cityId === cityId);
}

export async function createReview(data: CreateReviewInput) {
  try {
    // Validate content length (max 500 characters)
    if (!data.content || data.content.trim().length === 0) {
      return { success: false, error: '리뷰 내용을 입력해주세요.' };
    }

    if (data.content.length > 500) {
      return { success: false, error: '리뷰는 최대 500자까지 작성 가능합니다.' };
    }

    // In a real app, this would save to the database
    // For now, we're working with dummy data
    const newReview = {
      id: `review-${Date.now()}`,
      cityId: data.cityId,
      userId: data.userId,
      userName: data.userName,
      userAvatar: data.userAvatar,
      content: data.content.trim(),
      stayDuration: data.stayDuration,
      createdAt: new Date().toISOString().split('T')[0],
      helpful: 0
    };

    // In a real app, we would push this to the database
    // reviews.push(newReview);

    // Simulate network delay
    await new Promise((resolve) => setTimeout(resolve, 500));

    // Revalidate the city detail page
    revalidatePath(`/cities/${data.cityId}`);

    return { success: true, review: newReview };
  } catch (error) {
    console.error('Error creating review:', error);
    return { success: false, error: '리뷰 작성 중 오류가 발생했습니다.' };
  }
}

export async function updateReview(reviewId: string, userId: string, content: string) {
  try {
    // Validate content length
    if (!content || content.trim().length === 0) {
      return { success: false, error: '리뷰 내용을 입력해주세요.' };
    }

    if (content.length > 500) {
      return { success: false, error: '리뷰는 최대 500자까지 작성 가능합니다.' };
    }

    // Find the review
    const review = reviews.find((r) => r.id === reviewId);

    if (!review) {
      return { success: false, error: '리뷰를 찾을 수 없습니다.' };
    }

    // Check permission
    if (review.userId !== userId) {
      return { success: false, error: '자신의 리뷰만 수정할 수 있습니다.' };
    }

    // In a real app, this would update the database
    // review.content = content.trim();

    // Simulate network delay
    await new Promise((resolve) => setTimeout(resolve, 500));

    // Revalidate the city detail page
    revalidatePath(`/cities/${review.cityId}`);

    return { success: true };
  } catch (error) {
    console.error('Error updating review:', error);
    return { success: false, error: '리뷰 수정 중 오류가 발생했습니다.' };
  }
}

export async function deleteReview(reviewId: string, userId: string) {
  try {
    // Find the review
    const reviewIndex = reviews.findIndex((r) => r.id === reviewId);

    if (reviewIndex === -1) {
      return { success: false, error: '리뷰를 찾을 수 없습니다.' };
    }

    const review = reviews[reviewIndex];

    // Check permission
    if (review.userId !== userId) {
      return { success: false, error: '자신의 리뷰만 삭제할 수 있습니다.' };
    }

    // In a real app, this would delete from the database
    // reviews.splice(reviewIndex, 1);

    // Simulate network delay
    await new Promise((resolve) => setTimeout(resolve, 500));

    // Revalidate the city detail page
    revalidatePath(`/cities/${review.cityId}`);

    return { success: true };
  } catch (error) {
    console.error('Error deleting review:', error);
    return { success: false, error: '리뷰 삭제 중 오류가 발생했습니다.' };
  }
}
