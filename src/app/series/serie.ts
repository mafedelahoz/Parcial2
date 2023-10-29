export class Serie {
  id: number;
  name: string;
  channel: string;
  seasons: number;
  linkWebPage: string;
  linkImage: string;
  description: string;

  constructor(id: number, name: string,channel: string, seasons: number, description: string, linkWebPage: string, linkImage: string) {
      this.id = id;
      this.name = name;
      this.seasons = seasons;
      this.channel = channel;
      this.description = description;
      this.linkWebPage = linkWebPage;
      this.linkImage = linkImage;
  }

  getid() {
      return this.id;
  }
  getName() {
      return this.name;
  }
  getSeasons() {
      return this.seasons;
  }
  getchannel() {
      return this.channel;
  }
  getDescription() {
      return this.description;
  }
  getLinkWebPage() {
      return this.linkWebPage;
  }
  getLinkImage() {
      return this.linkImage;
  }

}
