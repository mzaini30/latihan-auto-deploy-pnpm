import { writeFileSync } from "fs";
import { randomUUID } from "crypto";

writeFileSync("hai.txt", randomUUID());
