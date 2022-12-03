import { NextFetchEvent, NextRequest, NextResponse } from "next/server";

// Next Auth
import { getToken } from "next-auth/jwt";

const middleware = async (req: NextRequest, ev: NextFetchEvent) => {
  return NextResponse.next();
};

export { middleware };
