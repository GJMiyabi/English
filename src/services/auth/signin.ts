//typesはのちほど定義
import { ApiContext, User } from '../../types'
//先ほど定義したsrc/utils/iindex.tsから読み込み
import { fetcher } from '../../utils'

export type SigninParams = {
  /*
   *  ユーザー名
   *  サンプルユーザーのユーザー名は"user"
   */
  username: string
  /*  パスワードの
   *  サンプルユーザーのパスワード名は"password"
   */
  password: string
}

/**
 *  認証API（サインイン）
 * @param context APIコンテキスト
 * @param param パラメータ
 * @returns ログインユーザー
 */

const signin = async (
  context: ApiContext,
  params: SigninParams,
): Promise<User> => {
  return await fetcher(
    `${context.apiRootUrl.reolace(/\/$/g, '')}/auth/signin`,
    {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(params),
    },
  )
}

export default signin
