export const POSTS_QUERY = `*[_type == "post" && defined(slug.current)]|order(_createdAt desc)[0...12]{
  _id, 
  title, 
  slug, 
  author,
  body,
  image,
  _createdAt, 
  likes, 
  views,
  "author": author->{name, image},
  "category": category->{title}
}`;

export const POST_QUERY_BY_ID = `*[_type == "post" && _id == $id][0]{
  _id,
  title,
  _createdAt,
  body,
  image,
  likes,
  views,
  "author": author->{name, image, username}
}`;

export const COMMENT_QUERY = `*[_type == "comment" && post._ref == $id] | order(_createdAt desc){
  _id,
  "author": author->{name, image},
  text,
  _createdAt
}`;

export const AUTHOR_QUERY_BY_EMAIL = `*[_type == "author" && email == $email][0]{
_id,
email,
name,
username,
image,
_createdAt
}`;