export default function AuthLayout({ children }) {
	return (
		<div className="min-h-screen bg-gradient-to-b from-orange-50 via-white to-white flex items-center justify-center px-4 py-12">
			<div className="w-full max-w-xl rounded-3xl border border-stone-200 bg-white/90 p-8 shadow-xl">
				{children}
			</div>
		</div>
	);
}
