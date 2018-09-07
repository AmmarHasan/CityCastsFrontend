export class User {
  id: String;
  name: String;
  username: String;
  password: String;
  avatar: String;
}

export class Cast {
  id: String;
  createdBy: User;
  createdAt: Date;
  description: String;
  city: String;
  lat: Number;
  long: Number;
  images: Array<String>;
  upvote: Array<User>;
  solved: Boolean;
}
