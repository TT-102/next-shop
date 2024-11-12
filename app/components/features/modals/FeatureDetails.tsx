interface FeatureDetailsProps {
  onClose: () => void;
}

export default function FeatureDetails({ onClose }: FeatureDetailsProps) {
  return (
    <div>
      <div className="modal-mask" onClick={onClose}></div>
      <div className="modal-inner">
        <h3>Feature Details</h3>
      </div>
    </div>
  );
}
