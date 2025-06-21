import {
	type Dispatch,
	type StateUpdater,
	useCallback,
	useEffect,
	useState,
} from "preact/hooks";

export function useSearchTerm(initialValue = "") {
	const KEY = "q" as const;

	const [searchTerm, setSearchTerm] = useState<string>(() => {
		const params = new URLSearchParams(window.location.search);
		return params.get(KEY) || initialValue;
	});

	useEffect(() => {
		const url = new URL(window.location.toString());
		url.searchParams.set(KEY, searchTerm);
		window.history.replaceState({}, "", url);
	}, [KEY, searchTerm]);

	return [searchTerm, setSearchTerm] as const;
}

export function useTransition() {
	const [isPending, setIsPending] = useState(false);

	const startTransition = useCallback(async (callback) => {
		setIsPending(true);
		try {
			await callback();
		} finally {
			setIsPending(false);
		}
	}, []);

	return [isPending, startTransition] as const;
}
