'use server';

import { cities } from '@/lib/dummy-data';
import { revalidatePath } from 'next/cache';

export async function getCityById(cityId: string) {
  const city = cities.find((c) => c.cityId === cityId);
  return city || null;
}

export async function toggleLike(cityId: string, userId: string) {
  try {
    // In a real app, this would update the database
    // For now, we're working with dummy data
    // The optimistic UI will handle the visual update

    // Simulate network delay
    await new Promise((resolve) => setTimeout(resolve, 300));

    // Revalidate the city detail page
    revalidatePath(`/cities/${cityId}`);
    revalidatePath('/');

    return { success: true };
  } catch (error) {
    console.error('Error toggling like:', error);
    return { success: false, error: 'Failed to toggle like' };
  }
}

export async function toggleDislike(cityId: string, userId: string) {
  try {
    // In a real app, this would update the database
    // For now, we're working with dummy data
    // The optimistic UI will handle the visual update

    // Simulate network delay
    await new Promise((resolve) => setTimeout(resolve, 300));

    // Revalidate the city detail page
    revalidatePath(`/cities/${cityId}`);
    revalidatePath('/');

    return { success: true };
  } catch (error) {
    console.error('Error toggling dislike:', error);
    return { success: false, error: 'Failed to toggle dislike' };
  }
}
