export const checkImageURL = (url) => {
  if (!url) return false;
  else {
    const pattern = new RegExp(
      "^https?:\\/\\/.+\\.(png|jpg|jpeg|bmp|gif|webp)$",
      "i"
    );
    return pattern.test(url);
  }
};

export const storeData = async (value) => {
  try {
    global.listing = value;
    console.log("AsyncStorage-listing:storeData()->", value);
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem("listing", jsonValue);
  } catch (e) {
    // saving error
  }
};

export const getData = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem("listing");
    const data = JSON.parse(jsonValue);
    global.listing = data || null;
    console.log("AsyncStorage-listing:getData()->", data);
    return jsonValue != null ? data : null;
  } catch (e) {
    // error reading value
  }
};
