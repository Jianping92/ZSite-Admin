interface UserBasic {
  name: string;
  avatar: string;
  email: string;
  sex: string;
  permission: string;
  others: object;
  [propName: string]: string | object;
}

export const userInfo = defineStore("userInfo", () => {
  const userBasic = reactive<UserBasic>({
    name: "",
    avatar: "",
    email: "",
    sex: "",
    permission: "",
    others: {}
  });

  const userLoginStatus = ref<boolean>(false);

  const setUserLoginStatus = (status: boolean) => {
    userLoginStatus.value = status;
  };

  const setUserBasic = (data: UserBasic): void => {
    if (typeof data === "object") {
      (Object.keys(data) as unknown as (keyof UserBasic)[]).forEach(
        (key: keyof typeof userBasic) => {
          if (key in userBasic) {
            userBasic[key] = data[key];
          }
        }
      );
    }
  };

  return {
    userBasic,
    userLoginStatus,
    setUserBasic,
    setUserLoginStatus
  };
});
