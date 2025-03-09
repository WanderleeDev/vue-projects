import type { ProfileType } from '../schemas/Profile.schema'

export interface ProfileApi {
  getProfile(): Promise<ProfileType>

  updateProfile(profile: Partial<ProfileType>): Promise<ProfileType>

  createProfile(profile: Partial<ProfileType>): Promise<ProfileType>
}
