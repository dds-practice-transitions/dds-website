class AudiencefulClient {
  private accessToken: string;
  private baseRoute: string;
  private headers: Headers;
  requiredTags: string[];

  constructor({ accessToken }: { accessToken: string }) {
    this.accessToken = accessToken;
    this.baseRoute = "https://app.audienceful.com/api";
    this.requiredTags =
      process.env.NODE_ENV === "development" ? ["TEST_ONLY"] : [];
    this.headers = new Headers({
      "Content-Type": "application/json",
      "X-Api-Key": accessToken,
    });
  }

  /**
   * Creates a new person in the audienceful app
   */
  async createPerson({ email, tags }: { email: string; tags: string[] }) {
    try {
      const response = await fetch(this.baseRoute.concat("/people/"), {
        headers: this.headers,
        method: "POST",
        body: JSON.stringify({
          email,
          tags: [...this.requiredTags, ...tags].toString(),
        }),
      });
      const json = await response.json();
      return json;
    } catch (error) {
      return new Error(error as string);
    }
  }
}

export const createAudiencefulClient = ({
  accessToken,
}: {
  accessToken: string;
}) => new AudiencefulClient({ accessToken });
