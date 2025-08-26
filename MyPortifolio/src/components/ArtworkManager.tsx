import React, { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Upload, ChevronLeft, ChevronRight, Image as ImageIcon, Plus, Trash2, Eye, Lock } from "lucide-react";
import { toast } from "@/hooks/use-toast";

interface Artwork {
  id: string;
  src: string;
  title: string;
  description: string;
  addedDate: string;
}

const ArtworkManager = () => {
  const [artworks, setArtworks] = useState<Artwork[]>([
    {
      id: '1',
      src: "https://images.unsplash.com/photo-1500673922987-e212871fec22?auto=format&fit=crop&w=800&q=80",
      title: "Portrait Study #1",
      description: "Digital art masterpiece",
      addedDate: new Date().toISOString()
    },
    {
      id: '2',
      src: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
      title: "Technical Illustration",
      description: "Modern tech visualization",
      addedDate: new Date().toISOString()
    },
    {
      id: '3',
      src: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80",
      title: "System Architecture",
      description: "Complex system design",
      addedDate: new Date().toISOString()
    }
  ]);
  
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [newArtwork, setNewArtwork] = useState({
    title: '',
    description: '',
    src: ''
  });

  const ADMIN_PASSWORD = 'arts123'; // Simple password for arts

  const authenticateUser = () => {
    if (password === ADMIN_PASSWORD) {
      setIsAuthenticated(true);
      setPassword('');
      toast({
        title: "Access Granted",
        description: "You can now manage artworks.",
      });
    } else {
      toast({
        title: "Access Denied",
        description: "Incorrect password. Please try again.",
        variant: "destructive"
      });
    }
  };

  const addArtwork = () => {
    if (!isAuthenticated) {
      toast({
        title: "Authentication Required",
        description: "Please enter the password to add artworks.",
        variant: "destructive"
      });
      return;
    }

    const artwork: Artwork = {
      id: Date.now().toString(),
      ...newArtwork,
      addedDate: new Date().toISOString()
    };

    setArtworks([...artworks, artwork]);
    setNewArtwork({ title: '', description: '', src: '' });
    setIsAddDialogOpen(false);
    
    toast({
      title: "Artwork Added",
      description: `${artwork.title} has been added to your gallery.`,
    });
  };

  const deleteArtwork = (id: string) => {
    if (!isAuthenticated) {
      toast({
        title: "Authentication Required",
        description: "Please enter the password to delete artworks.",
        variant: "destructive"
      });
      return;
    }

    const artwork = artworks.find(a => a.id === id);
    setArtworks(artworks.filter(a => a.id !== id));
    
    // Adjust current slide if needed
    if (currentSlide >= artworks.length - 1) {
      setCurrentSlide(Math.max(0, artworks.length - 2));
    }
    
    toast({
      title: "Artwork Deleted",
      description: artwork ? `${artwork.title} has been removed.` : "Artwork removed.",
    });
  };

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % artworks.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + artworks.length) % artworks.length);

  return (
    <div className="space-y-6">
      {/* Simple Password Section */}
      {!isAuthenticated && (
        <Card className="glam-glass border-yellow-500/30 max-w-md mx-auto">
          <CardContent className="p-6">
            <div className="text-center space-y-4">
              <div className="flex items-center justify-center gap-2">
                <Lock className="w-5 h-5 text-yellow-400" />
                <h3 className="text-lg font-semibold text-yellow-400">Artwork Management</h3>
              </div>
              <p className="text-gray-300 text-sm">Enter password to manage gallery</p>
              <div className="space-y-3">
                <Input
                  type="password"
                  placeholder="Enter password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="bg-transparent border-yellow-500/30 text-white text-center"
                  onKeyDown={(e) => e.key === 'Enter' && authenticateUser()}
                />
                <Button 
                  onClick={authenticateUser} 
                  className="w-full bg-yellow-500 text-black hover:bg-yellow-600"
                >
                  Access Gallery
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Add Artwork Button */}
      {isAuthenticated && (
        <div className="flex justify-center">
          <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
            <DialogTrigger asChild>
              <Button className="bg-purple-500 hover:bg-purple-600 text-white">
                <Plus className="w-4 h-4 mr-2" />
                Add New Artwork
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-md glam-glass border-purple-500/30">
              <DialogHeader>
                <DialogTitle className="text-purple-400">Add New Artwork</DialogTitle>
              </DialogHeader>
              <div className="space-y-4">
                <Input
                  placeholder="Artwork Title"
                  value={newArtwork.title}
                  onChange={(e) => setNewArtwork({...newArtwork, title: e.target.value})}
                  className="bg-transparent border-purple-500/30 text-white"
                />
                <Input
                  placeholder="Description"
                  value={newArtwork.description}
                  onChange={(e) => setNewArtwork({...newArtwork, description: e.target.value})}
                  className="bg-transparent border-purple-500/30 text-white"
                />
                <Input
                  placeholder="Image URL"
                  value={newArtwork.src}
                  onChange={(e) => setNewArtwork({...newArtwork, src: e.target.value})}
                  className="bg-transparent border-purple-500/30 text-white"
                />
                <Button onClick={addArtwork} className="w-full bg-purple-500 hover:bg-purple-600">
                  Add Artwork
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      )}

      {/* Main Carousel View */}
      {artworks.length > 0 && (
        <div className="relative mb-12">
          <Card className="glam-glass border-gray-700">
            <CardContent className="p-8">
              <div className="relative">
                <img
                  src={artworks[currentSlide]?.src || ''}
                  alt={artworks[currentSlide]?.title}
                  className="w-full h-96 object-cover rounded-lg"
                />
                {/* Delete button for authenticated users */}
                {isAuthenticated && (
                  <Button
                    onClick={() => deleteArtwork(artworks[currentSlide].id)}
                    className="absolute top-4 right-4 bg-red-500/80 hover:bg-red-600 text-white rounded-full p-2"
                  >
                    <Trash2 className="w-4 h-4" />
                  </Button>
                )}
                {/* Carousel Navigation */}
                {artworks.length > 1 && (
                  <>
                    <Button
                      onClick={prevSlide}
                      className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-2"
                    >
                      <ChevronLeft className="w-6 h-6" />
                    </Button>
                    <Button
                      onClick={nextSlide}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-2"
                    >
                      <ChevronRight className="w-6 h-6" />
                    </Button>
                  </>
                )}
              </div>
              <div className="mt-6 text-center">
                <h3 className="text-2xl font-bold text-yellow-400 mb-2">
                  {artworks[currentSlide]?.title}
                </h3>
                <p className="text-gray-400">{artworks[currentSlide]?.description}</p>
                <p className="text-xs text-gray-500 mt-2">
                  Added: {new Date(artworks[currentSlide]?.addedDate).toLocaleDateString()}
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Artwork Thumbnail Grid - Scrollable */}
      <div className="max-h-[400px] overflow-y-auto scrollbar-thin scrollbar-thumb-yellow-500 scrollbar-track-gray-800">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 p-2">
          {artworks.map((artwork, idx) => (
            <Card
              key={artwork.id}
              className={`glam-glass border-gray-700 hover:border-yellow-500/50 transition-all duration-300 cursor-pointer ${
                idx === currentSlide ? 'ring-2 ring-yellow-500' : ''
              }`}
              onClick={() => setCurrentSlide(idx)}
            >
              <CardContent className="p-4">
                <img
                  src={artwork.src}
                  alt={artwork.title}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h4 className="text-yellow-400 font-semibold text-center">
                  {artwork.title}
                </h4>
                <p className="text-xs text-gray-400 text-center">{artwork.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {artworks.length === 0 && (
        <div className="text-center py-12">
          <ImageIcon className="w-16 h-16 text-gray-500 mx-auto mb-4" />
          <p className="text-gray-400 text-lg">No artworks in gallery.</p>
          <p className="text-gray-500 text-sm mt-2">
            {isAuthenticated ? "Add your first artwork above!" : "Authenticate to manage gallery."}
          </p>
        </div>
      )}
    </div>
  );
};

export default ArtworkManager;