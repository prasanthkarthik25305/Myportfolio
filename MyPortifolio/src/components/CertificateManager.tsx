import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Plus, Lock, Eye, Trash2, Mail } from "lucide-react";
import { toast } from "@/hooks/use-toast";

interface Certificate {
  id: string;
  platform: string;
  title: string;
  year: string;
  logo: string;
  certImg: string;
  viewUrl: string;
  description: string;
  addedDate: string;
}

const CertificateManager = () => {
  const [certificates, setCertificates] = useState<Certificate[]>([
    {
      id: '1',
      platform: 'AWS',
      title: 'AWS Certified Solutions Architect',
      year: '2024',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg',
      certImg: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      viewUrl: '#',
      description: 'Professional cloud architecture certification',
      addedDate: new Date().toISOString()
    }
  ]);
  
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [newCert, setNewCert] = useState({
    platform: '',
    title: '',
    year: '',
    logo: '',
    certImg: '',
    viewUrl: '',
    description: ''
  });

  const ADMIN_PASSWORD = 'admin123'; // Change this to your secure password

  const sendNotificationEmail = async (action: string, certTitle: string) => {
    // Simulate email notification
    console.log(`Email sent: ${action} certificate "${certTitle}" at ${new Date().toLocaleString()}`);
    toast({
      title: "Security Alert",
      description: `Email notification sent: ${action} certificate "${certTitle}"`,
    });
  };

  const authenticateUser = () => {
    if (password === ADMIN_PASSWORD) {
      setIsAuthenticated(true);
      setPassword('');
      toast({
        title: "Authentication Successful",
        description: "You can now manage certificates.",
      });
    } else {
      toast({
        title: "Authentication Failed",
        description: "Incorrect password. Access denied.",
        variant: "destructive"
      });
    }
  };

  const addCertificate = () => {
    if (!isAuthenticated) {
      toast({
        title: "Authentication Required",
        description: "Please enter the correct password to add certificates.",
        variant: "destructive"
      });
      return;
    }

    const certificate: Certificate = {
      id: Date.now().toString(),
      ...newCert,
      addedDate: new Date().toISOString()
    };

    setCertificates([...certificates, certificate]);
    setNewCert({
      platform: '',
      title: '',
      year: '',
      logo: '',
      certImg: '',
      viewUrl: '',
      description: ''
    });
    setIsAddDialogOpen(false);
    
    sendNotificationEmail('Added', certificate.title);
    
    toast({
      title: "Certificate Added",
      description: `${certificate.title} has been added successfully.`,
    });
  };

  const deleteCertificate = (id: string) => {
    if (!isAuthenticated) {
      toast({
        title: "Authentication Required",
        description: "Please enter the correct password to delete certificates.",
        variant: "destructive"
      });
      return;
    }

    const cert = certificates.find(c => c.id === id);
    setCertificates(certificates.filter(c => c.id !== id));
    
    if (cert) {
      sendNotificationEmail('Deleted', cert.title);
    }
    
    toast({
      title: "Certificate Deleted",
      description: "Certificate has been removed successfully.",
    });
  };

  return (
    <div className="space-y-6">
      {/* Simple Password Section */}
      {!isAuthenticated && (
        <Card className="glam-glass border-yellow-500/30 max-w-md mx-auto">
          <CardContent className="p-6">
            <div className="text-center space-y-4">
              <div className="flex items-center justify-center gap-2">
                <Lock className="w-5 h-5 text-yellow-400" />
                <h3 className="text-lg font-semibold text-yellow-400">Certificate Management</h3>
              </div>
              <p className="text-gray-300 text-sm">Enter password to manage certificates</p>
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
                  Access Certificates
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Add Certificate Button */}
      {isAuthenticated && (
        <div className="flex justify-center">
          <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
            <DialogTrigger asChild>
              <Button className="bg-green-500 hover:bg-green-600 text-white">
                <Plus className="w-4 h-4 mr-2" />
                Add New Certificate
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-md glam-glass border-green-500/30">
              <DialogHeader>
                <DialogTitle className="text-green-400">Add New Certificate</DialogTitle>
              </DialogHeader>
              <div className="space-y-4">
                <Input
                  placeholder="Platform (e.g., AWS, Google, Microsoft)"
                  value={newCert.platform}
                  onChange={(e) => setNewCert({...newCert, platform: e.target.value})}
                  className="bg-transparent border-green-500/30 text-white"
                />
                <Input
                  placeholder="Certificate Title"
                  value={newCert.title}
                  onChange={(e) => setNewCert({...newCert, title: e.target.value})}
                  className="bg-transparent border-green-500/30 text-white"
                />
                <Input
                  placeholder="Year"
                  value={newCert.year}
                  onChange={(e) => setNewCert({...newCert, year: e.target.value})}
                  className="bg-transparent border-green-500/30 text-white"
                />
                <Input
                  placeholder="Logo URL"
                  value={newCert.logo}
                  onChange={(e) => setNewCert({...newCert, logo: e.target.value})}
                  className="bg-transparent border-green-500/30 text-white"
                />
                <Input
                  placeholder="Certificate Image URL"
                  value={newCert.certImg}
                  onChange={(e) => setNewCert({...newCert, certImg: e.target.value})}
                  className="bg-transparent border-green-500/30 text-white"
                />
                <Input
                  placeholder="View Certificate URL"
                  value={newCert.viewUrl}
                  onChange={(e) => setNewCert({...newCert, viewUrl: e.target.value})}
                  className="bg-transparent border-green-500/30 text-white"
                />
                <Input
                  placeholder="Description"
                  value={newCert.description}
                  onChange={(e) => setNewCert({...newCert, description: e.target.value})}
                  className="bg-transparent border-green-500/30 text-white"
                />
                <Button onClick={addCertificate} className="w-full bg-green-500 hover:bg-green-600">
                  Add Certificate
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      )}

      {/* Certificates Grid - Scrollable */}
      <div className="max-h-[600px] overflow-y-auto scrollbar-thin scrollbar-thumb-yellow-500 scrollbar-track-gray-800">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-2">
          {certificates.map((cert) => (
            <Card key={cert.id} className="glam-glass border border-gray-700 hover:border-yellow-500/50 transition-all group">
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <img src={cert.logo} alt={cert.platform} className="w-8 h-8 object-contain" />
                  <Badge variant="outline" className="text-yellow-400 border-yellow-400">
                    {cert.year}
                  </Badge>
                  {isAuthenticated && (
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => deleteCertificate(cert.id)}
                      className="text-red-400 hover:text-red-300 hover:bg-red-500/20"
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  )}
                </div>
                
                <div className="aspect-video rounded-lg overflow-hidden">
                  <img 
                    src={cert.certImg} 
                    alt={cert.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                
                <div>
                  <h3 className="font-playfair font-bold text-lg text-white mb-2">
                    {cert.title}
                  </h3>
                  <p className="text-gray-300 text-sm mb-4">
                    {cert.description}
                  </p>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="w-full border-yellow-500 text-yellow-400 hover:bg-yellow-500 hover:text-black"
                    onClick={() => window.open(cert.viewUrl, '_blank')}
                  >
                    <Eye className="w-4 h-4 mr-2" />
                    View Certificate
                  </Button>
                </div>
                
                <div className="text-xs text-gray-500 pt-2 border-t border-gray-700">
                  Added: {new Date(cert.addedDate).toLocaleDateString()}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      
      {certificates.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-400 text-lg">No certificates available.</p>
          <p className="text-gray-500 text-sm mt-2">
            {isAuthenticated ? "Add your first certificate above!" : "Authenticate to manage certificates."}
          </p>
        </div>
      )}
    </div>
  );
};

export default CertificateManager;