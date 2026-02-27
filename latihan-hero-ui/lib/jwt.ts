import { SignJWT, jwtVerify, JWTPayload } from "jose";

const secretKey = new TextEncoder().encode(
    process.env.JWT_SECRET || "SUPER_SECRET_KEY_FOR_DEVELOPMENT_ONLY"
);

export interface JwtPayload extends JWTPayload {
  id: number
  username: string
  role: string
}

export async function createJwt(payload: JwtPayload): Promise<string> {
  const jwt = await new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256", typ: "JWT" })
    .setIssuedAt()
    .setExpirationTime("2h")
    .sign(secretKey);
  return jwt;
}

export async function verifyToken(token: string) {
    try {
        const { payload } = await jwtVerify(token, secretKey);
        return payload as JwtPayload;
    } catch (error) {
        console.error("Token verification failed:", error);
        return null;
    }
}