/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-explicit-any */
import type { UnpackTypeGuard } from "../lab/UnpackTypeGuard";
import { doExtends } from "../doExtends";
import type { Any } from "ts-toolbelt";

{
    const isFoo = (_o: any): _o is "foo" => {
        return null as any;
    };

    type Expected = "foo";
    type Got = UnpackTypeGuard<typeof isFoo>;

    doExtends<Any.Equals<Got, Expected>, 1>();
}
