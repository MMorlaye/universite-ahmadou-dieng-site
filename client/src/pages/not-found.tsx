import { Card, CardContent } from "@/components/ui/card";
import { AlertCircle } from "lucide-react";
import Layout from "@/components/Layout";
import { Link } from "wouter";
import { useEffect } from "react";

export default function NotFound() {
  useEffect(() => {
    document.title = "Université Ahmadou Dieng - Page non trouvée";
  }, []);

  return (
    <Layout>
      <div className="min-h-[70vh] w-full flex items-center justify-center pt-24">
        <Card className="w-full max-w-md mx-4">
          <CardContent className="pt-6 pb-8">
            <div className="flex mb-4 gap-2 items-center">
              <AlertCircle className="h-8 w-8 text-[#E67E22]" />
              <h1 className="text-2xl font-bold text-[#003366]">Page non trouvée</h1>
            </div>

            <p className="mt-4 text-base text-gray-600 mb-8">
              La page que vous recherchez n'existe pas ou a été déplacée.
            </p>

            <Link href="/">
              <a className="inline-block bg-[#003366] hover:bg-[#004080] text-white py-3 px-6 rounded text-center transition-all font-medium w-full">
                Retour à l'accueil
              </a>
            </Link>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
}
