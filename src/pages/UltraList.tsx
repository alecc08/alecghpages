// Backwards compatibility: re-export the renamed ListKeeper page
// Backwards compatibility: re-export the renamed ListKeeper page
export { default } from './ListKeeper';

// Additionally provide a small named export that renders a privacy policy link
// so other code can import it if needed.
export const PrivacyPolicyLink = () => {
	return (
		// link points to the published privacy policy (docs or public root)
		<a href="/privacy-policy-listkeeper-en.html" target="_blank" rel="noopener noreferrer">ListKeeper Privacy Policy</a>
	);
};
