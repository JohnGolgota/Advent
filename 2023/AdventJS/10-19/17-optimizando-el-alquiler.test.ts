import { describe, expect, it } from "vitest";
import { optimizeIntervals } from "./17-optimizando-el-alquiler";

describe("optimizeIntervals", () => {
	const inputAndExpected = [
		[
			[
				[2, 7],
				[3, 4],
				[5, 8],
			],
			[[2, 8]],
		],
		[
			[
				[1, 3],
				[8, 10],
				[2, 6],
			],
			[
				[1, 6],
				[8, 10],
			],
		],
		[
			[
				[3, 4],
				[1, 2],
				[5, 6],
			],
			[
				[1, 2],
				[3, 4],
				[5, 6],
			],
		],
	];

	it.each(inputAndExpected)("should return %p for %p", (input, expected) => {
		expect(optimizeIntervals(input)).toEqual(expected);
	});
});
