export const POSTS_QUERY = `*[_type == "post"]|order(_createdAt desc)[0...12]{
  _id, 
  title, 
  slug, 
  author,
  body,
  image,
  _createdAt, 
  likes, 
  views,
  "author": author->{name, username, image},
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
  "author": author->{_id, name, image, username},
  "category": category->{_id, title},
}`;

export const COMMENT_QUERY = `*[_type == "comment" && post._ref == $id] | order(_createdAt desc){
  _id,
  "author": author->{name, username, image},
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

export const AUTHOR_QUERY_BY_USERNAME = `*[_type == "author" && username == $username][0]{
  _id,
  email,
  name,
  username,
  image,
  bio,
  _createdAt
}`;

export const USER_POSTS_QUERY = `*[_type == "post" && author._ref == $id] | order(_createdAt desc){
  _id,
  title,
  slug,
  image,
  _createdAt,
  likes,
  views,
  body,
  "author": author->{name, image},
  "category": category->{title}
}`;