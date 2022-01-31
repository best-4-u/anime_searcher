const axios: any = jest.createMockFromModule("axios");

axios.create = jest.fn(() => axios);

export default axios;
