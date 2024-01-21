import "./spin.scss";

export default function FullSpin() {
  return (
    <div className="min-w-screen fixed inset-0 flex min-h-screen items-center justify-center">
      <div className="yi-spin">
        <span className="spin-dot spin">
          <i></i>
          <i></i>
          <i></i>
          <i></i>
        </span>
      </div>
    </div>
  );
}
