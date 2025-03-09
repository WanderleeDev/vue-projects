import { fakeApi } from '@/shared/utils/fakeApi'
import type { ProfileApi } from '../interface/ProfileApi.interface'
import type { ProfileType } from '../schemas/Profile.schema'
import type { InjectionKey } from 'vue'

export const PROFILE_API_SERVICE: InjectionKey<ProfileApi> = Symbol('profileApiService')

export class ProfileApiService implements ProfileApi {
  async getProfile(): Promise<ProfileType> {
    return fakeApi<ProfileType>({} as ProfileType)
  }
  updateProfile(profile: Partial<ProfileType>): Promise<ProfileType> {
    return fakeApi<ProfileType>(profile as ProfileType)
  }
  createProfile(_profile: Partial<ProfileType>): Promise<ProfileType> {
    return fakeApi<ProfileType>({} as ProfileType)
  }
}
