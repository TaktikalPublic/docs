| Name              | Phone number | Result                                                            |
| ----------------- | ------------ | ----------------------------------------------------------------- |
| Jane Doe          | +11111111111 | Valid                                                             |
| John Doe          | +12222222222 | Valid                                                             |
| Joe Hancock       | +13333333333 | Valid                                                             |
| Amerigo Vespucci  | +14444444444 | Valid                                                             |
| George Washington | +15555555555 | Valid                                                             |
| Thomas Jefferson  | +16666666666 | Valid                                                             |
| Abraham Lincoln   | +17777777777 | Http = 400 \{ ErrorCode = "1122", Message = "Token not found" \}    |
| John F. Kennedy   | +18888888888 | Http = 400 \{ ErrorCode = "1120", Message = "Incorrect OTP code" \} |
| Harry S. Truman   | +19999999999 | Http = 400 \{ ErrorCode = "1121", Message = "Token expired" \}      |
