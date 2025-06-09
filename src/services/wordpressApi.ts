
import { WordPressPost, WordPressCategory, WordPressMedia, WordPressComment, WordPressAuthor } from '@/types/wordpress';

const API_BASE_URL = 'https://saintefaustinekb.org/wp-json/wp/v2';

class WordPressApiService {
  async getPosts(page = 1, perPage = 10, categoryId?: number): Promise<WordPressPost[]> {
    const params = new URLSearchParams({
      page: page.toString(),
      per_page: perPage.toString(),
      _embed: 'true'
    });
    
    if (categoryId) {
      params.append('categories', categoryId.toString());
    }

    const response = await fetch(`${API_BASE_URL}/posts?${params}`);
    if (!response.ok) {
      throw new Error('Failed to fetch posts');
    }
    return response.json();
  }

  async getPostBySlug(slug: string): Promise<WordPressPost | null> {
    const response = await fetch(`${API_BASE_URL}/posts?slug=${slug}&_embed=true`);
    if (!response.ok) {
      throw new Error('Failed to fetch post');
    }
    const posts = await response.json();
    return posts.length > 0 ? posts[0] : null;
  }

  async getCategories(): Promise<WordPressCategory[]> {
    const response = await fetch(`${API_BASE_URL}/categories?per_page=100`);
    if (!response.ok) {
      throw new Error('Failed to fetch categories');
    }
    return response.json();
  }

  async getFeaturedMedia(mediaId: number): Promise<WordPressMedia | null> {
    if (!mediaId) return null;
    
    try {
      const response = await fetch(`${API_BASE_URL}/media/${mediaId}`);
      if (!response.ok) {
        return null;
      }
      return response.json();
    } catch (error) {
      console.error('Error fetching media:', error);
      return null;
    }
  }

  async getComments(postId: number, page = 1, perPage = 5): Promise<WordPressComment[]> {
    const response = await fetch(`${API_BASE_URL}/comments?post=${postId}&page=${page}&per_page=${perPage}`);
    if (!response.ok) {
      throw new Error('Failed to fetch comments');
    }
    return response.json();
  }

  async getLatestComments(perPage = 5): Promise<WordPressComment[]> {
    const response = await fetch(`${API_BASE_URL}/comments?per_page=${perPage}&orderby=date&order=desc`);
    if (!response.ok) {
      throw new Error('Failed to fetch latest comments');
    }
    return response.json();
  }

  async getAuthor(authorId: number): Promise<WordPressAuthor | null> {
    try {
      const response = await fetch(`${API_BASE_URL}/users/${authorId}`);
      if (!response.ok) {
        return null;
      }
      return response.json();
    } catch (error) {
      console.error('Error fetching author:', error);
      return null;
    }
  }

  async getRelatedPosts(categoryIds: number[], currentPostId: number, perPage = 3): Promise<WordPressPost[]> {
    if (categoryIds.length === 0) return [];
    
    const response = await fetch(
      `${API_BASE_URL}/posts?categories=${categoryIds.join(',')}&exclude=${currentPostId}&per_page=${perPage}&_embed=true`
    );
    
    if (!response.ok) {
      return [];
    }
    return response.json();
  }

  async submitComment(postId: number, content: string, authorName: string, authorEmail: string, parentId?: number): Promise<WordPressComment> {
    const response = await fetch(`${API_BASE_URL}/comments`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        post: postId,
        content,
        author_name: authorName,
        author_email: authorEmail,
        parent: parentId || 0,
      }),
    });

    if (!response.ok) {
      throw new Error('Failed to submit comment');
    }
    return response.json();
  }
}

export const wordpressApi = new WordPressApiService();
