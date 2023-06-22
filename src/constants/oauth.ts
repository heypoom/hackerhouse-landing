export const oauthClients: OAuthClientConfig[] = [
  {
    clientId: 'https://github.com/dtinth/authgarten-example',
    name: 'Authgarten Example',
    redirectUris: ['http://localhost:35329/api/auth/callback/creatorsgarten'],
  },
]

interface OAuthClientConfig {
  /** Client ID */
  clientId: string

  /** Application name */
  name: string

  /** Allowed redirect URLs */
  redirectUris: string[]
}
