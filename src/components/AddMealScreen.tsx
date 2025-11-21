import { Camera, Image, X } from 'lucide-react';

interface AddMealScreenProps {
  onClose: () => void;
  onTakePhoto: () => void;
  onChooseGallery: () => void;
}

export function AddMealScreen({ onClose, onTakePhoto, onChooseGallery }: AddMealScreenProps) {
  return (
    <div className="flex flex-col h-full bg-background">
      {/* Header */}
      <div className="px-6 py-6 flex items-center justify-between">
        <h2>Add Meal</h2>
        <button
          onClick={onClose}
          className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-muted transition-colors"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      <div className="flex-1 flex flex-col items-center justify-center px-6 space-y-4">
        <p className="text-center text-muted-foreground mb-4">
          Choose how you'd like to add your meal
        </p>

        {/* Take Photo */}
        <button
          onClick={onTakePhoto}
          className="w-full max-w-sm bg-card rounded-[16px] p-6 card-shadow hover:shadow-lg transition-all flex items-center gap-4 border-2 border-transparent hover:border-primary"
        >
          <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
            <Camera className="w-7 h-7 text-primary" />
          </div>
          <div className="flex-1 text-left">
            <h3 className="mb-1">Take Photo</h3>
            <p className="text-muted-foreground">Snap a picture of your meal</p>
          </div>
        </button>

        {/* Choose from Gallery */}
        <button
          onClick={onChooseGallery}
          className="w-full max-w-sm bg-card rounded-[16px] p-6 card-shadow hover:shadow-lg transition-all flex items-center gap-4 border-2 border-transparent hover:border-primary"
        >
          <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
            <Image className="w-7 h-7 text-primary" />
          </div>
          <div className="flex-1 text-left">
            <h3 className="mb-1">Choose from Gallery</h3>
            <p className="text-muted-foreground">Select an existing photo</p>
          </div>
        </button>
      </div>
    </div>
  );
}
