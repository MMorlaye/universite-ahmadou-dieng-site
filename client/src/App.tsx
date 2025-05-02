import { Switch, Route, Redirect } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import Catalogue from "@/pages/Catalogue";
// Supprimez l'importation de Histoire puisqu'il est fusionné avec Rectorat
import Rectorat from "@/pages/Rectorat";
import Gouvernance from "@/pages/Gouvernance";
import Evenements from "@/pages/Evenements";
import Blog from "@/pages/Blog";
import ArticleDetail from "@/pages/ArticleDetail";
import VieCampus from "@/pages/VieCampus";
import Campus from "@/pages/Campus";
import FAQ from "@/pages/FAQ";
import Contact from "@/pages/Contact";

// Composant de redirection pour Histoire vers Rectorat avec onglet histoire
function HistoireRedirect() {
  return <Redirect to="/rectorat?tab=histoire" />;
}

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home}/>
      <Route path="/catalogue" component={Catalogue}/>
      <Route path="/histoire" component={HistoireRedirect}/>
      <Route path="/rectorat" component={Rectorat}/>
      <Route path="/gouvernance" component={Gouvernance}/>
      <Route path="/evenements" component={Evenements}/>
      <Route path="/blog" component={Blog}/>
      <Route path="/article/:id" component={ArticleDetail}/>
      <Route path="/vie-campus" component={VieCampus}/>
      <Route path="/nos-campus" component={Campus}/>
      <Route path="/campus" component={Campus}/>
      <Route path="/faq" component={FAQ}/>
      <Route path="/contact" component={Contact}/>
      {/* Fallback to 404 */}
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <main>
          <Router />
        </main>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
