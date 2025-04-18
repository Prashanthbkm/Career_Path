export const sendToken = (user, statusCode, res, message) => {
  const token = user.getJWTToken();
  
  // Ensure COOKIE_EXPIRE is a valid number
  const cookieExpireInDays = Number(process.env.COOKIE_EXPIRE);
  
  if (isNaN(cookieExpireInDays) || cookieExpireInDays <= 0) {
    // Default to 5 days if COOKIE_EXPIRE is not a valid number
    console.error("Invalid COOKIE_EXPIRE value, defaulting to 5 days.");
    cookieExpireInDays = 5;
  }

  const options = {
    expires: new Date(Date.now() + cookieExpireInDays * 24 * 60 * 60 * 1000), // Expiration in ms
    httpOnly: true, // Set httpOnly to true
  };

  res.status(statusCode).cookie("token", token, options).json({
    success: true,
    user,
    message,
    token,
  });
};
