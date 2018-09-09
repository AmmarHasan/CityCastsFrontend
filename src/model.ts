export class Citizen {
  name: String;
  username: String;
  password: String;
  avatar: String;
  email: String;
  id: String;
}

export class Cast {
  constructor(
    public description: String,
    public createdBy: Citizen,
    public createdAt: Date,
    public city: String,
    public images?: Array<String>,
    public latitude?: Number,
    public longitude?: Number,
    public upvote?: Array<Citizen>,
    public solved?: Boolean,
    public id?: String
  ) { }
}
