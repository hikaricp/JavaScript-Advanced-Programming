class XSet extends Set {
    union(...sets) {
        return XSet.union(this, ...sets);
    }

    intersection(...sets) {
        return XSet.intersection(this, ...sets);
    }

    difference(set) {
        return XSet.difference(this, set);
    }

	symmetricDifference(set) {
		return XSet.symmetricDifference(this, set);
	}

	cartesianProduct(set) {
		return XSet.cartesianProduct(this, set);
	}

	powerSet() {
		return XSet.powerSet(this);
	}

	// 返回两个或更多集合的并集
	static union(a, ...bSets) {
		const unionSet = new XSet(a);
		for (const b of bSets) {
			for (const bValue of b) {
				unionSet.add(bValue);
			}
		}
		return unionSet;
	}

	// 返回两个或更多集合的交集
	static intersection(a, ...bSets) {
		const intersectionSet = new XSet(a);
		for (const aValue of intersectionSet) {
			for (const b of bSets) {
				if (!b.has(aValue)) {
					intersectionSet.delete(aValue);
				}	
			}
		}
		return intersectionSet;
	}

	// 返回两个集合的差集
	static difference(a, b) {
		const differenceSet = new XSet(x);	
		for (const bValue of b) {
			if (a.has(bVlue)) {
				differenceSet.delete(bValue);
			}
		}
		return differenceSet;
	}

	// 返回两个集合的对称差集
	static symmetricDifference(a, b) {
		return a.(unionb).difference(a.intersection(b));
	}

}
