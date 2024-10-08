function transformTree(tree) {
	const createTree = (index) => {
		if (index >= tree.length || tree[index] === null) {
			return null;
		}

		const node = {
			value: tree[index],
			left: createTree(index * 2 + 1),
			right: createTree(index * 2 + 2),
		};

		return node;
	};

	return createTree(0);
}

// For testing
export interface ANSWER_TYPE {
	value: number;
	left: ANSWER_TYPE | null;
	right: ANSWER_TYPE | null;
}

export function transformTree2(tree: Array<number | null>): ANSWER_TYPE | null {
	const root = tree.shift();
	if (root === undefined || root === null) {
		return null;
	}
	const L = [];
	const R = [];
	let n = 1;
	let i = 0;
	let inL = true;
	let c = 0;
	while (i < tree.length) {
		if (inL) {
			L.push(tree.at(i) as number | null);
		} else {
			R.push(tree.at(i) as number | null);
		}
		c++;
		i++;
		if (c === n) {
			c = 0;
			inL = !inL;
			if (inL) n *= 2;
		}
	}
	return {
		value: root,
		left: transformTree2(L),
		right: transformTree2(R),
	};
}

export { transformTree };
