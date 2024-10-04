import { describe, expect, it } from "vitest";
import { transformTree } from "./16-despliegue-en-viernes";

describe("transformTree", () => {
	const inputAndExpected = [
		[
			[3, 1, 0, 8, 12, null, 1],
			{
				value: 3,
				left: {
					value: 1,
					left: {
						value: 8,
						left: null,
						right: null,
					},
					right: {
						value: 12,
						left: null,
						right: null,
					},
				},
				right: {
					value: 0,
					left: null,
					right: {
						value: 1,
						left: null,
						right: null,
					},
				},
			},
		],
	];

	it.each(inputAndExpected)("should return %p for %p", (input, expected) => {
		expect(transformTree(input)).toEqual(expected);
	});
});
