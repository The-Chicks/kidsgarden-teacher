import instance from './Instance';

export default {
  parseJwt: (token: string) => {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(
      window
        .atob(base64)
        .split('')
        .map((c) => {
          return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        })
        .join(''),
    );

    return JSON.parse(jsonPayload);
  },

  login: async (email: string, pw: string) => {
    return await instance
      .post('/member/login', {
        userEmail: email,
        password: pw,
      })
      .catch((e) => {
        console.log('login error', e.response);
        return e.response;
      });
  },
  refresh: async (token: string) => {
    const response = await instance
      .post('/token/reIssue', { refreshToken: token })
      .then((res) => {
        if (res.status === 200) {
          instance.defaults.headers.common[
            'Authorization'
          ] = `Bearer ${res.data['accessToken']}`;
          localStorage.setItem('KE_refreshToken', res.data['refreshToken']);
          localStorage.setItem('KE_accessToken', res.data['accessToken']);
        }
        return res;
      })
      .catch((e) => {
        console.log('refresh', e);
        return e.response;
      });
    return response;
  },
  register: async (email: string, pw: string) => {
    return await instance
      .post('/member/register', {
        userEmail: email,
        password: pw,
      })
      .catch((e) => {
        console.log('register error', e.response);
        return e.response;
      });
  },
};
