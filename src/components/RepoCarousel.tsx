import React, { useState, useEffect } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface Repository {
  id: number;
  name: string;
  description: string;
  html_url: string;
  language: string;
  stargazers_count: number;
  forks_count: number;
}

const LANGUAGE_COLORS: Record<string, string> = {
  JavaScript: '#f1e05a',
  TypeScript: '#3178c6',
  HTML: '#e34c26',
  CSS: '#563d7c',
  Python: '#3572A5',
  Java: '#b07219',
  'C#': '#178600',
  Go: '#00ADD8',
  Swift: '#ffac45',
  Kotlin: '#A97BFF',
  Rust: '#dea584',
  'C++': '#f34b7d',
  C: '#555555',
};

const CACHE_KEY = 'github_repos_cache';
const CACHE_TTL = 10 * 60 * 1000; // 10 minutes

const FALLBACK_REPOS: Repository[] = [
  { id: 1, name: 'RugRadar',   description: 'Solana rug pull detection system',       html_url: 'https://github.com/nisargpatel7042lva/RugRadar',       language: 'TypeScript', stargazers_count: 0, forks_count: 0 },
  { id: 2, name: 'Hustl3',     description: 'AI + Human marketplace with crypto escrow', html_url: 'https://github.com/nisargpatel7042lva/Hustl3',       language: 'TypeScript', stargazers_count: 0, forks_count: 0 },
  { id: 3, name: 'SkillSwap',  description: 'Decentralized skill-sharing DAO',        html_url: 'https://github.com/nisargpatel7042lva/SkillSwap-DAO',  language: 'Solidity',   stargazers_count: 0, forks_count: 0 },
  { id: 4, name: 'ChainCred',  description: 'Web3 reputation system with ZK proofs',  html_url: 'https://github.com/nisargpatel7042lva/chaincred-ETHGlobal/', language: 'TypeScript', stargazers_count: 0, forks_count: 0 },
  { id: 5, name: 'Lazorkit',   description: 'Solana smart wallet via WebAuthn',        html_url: 'https://github.com/nisargpatel7042lva/Lazorkit',       language: 'TypeScript', stargazers_count: 0, forks_count: 0 },
];

const getCached = (): Repository[] | null => {
  try {
    const raw = sessionStorage.getItem(CACHE_KEY);
    if (!raw) return null;
    const { data, ts } = JSON.parse(raw) as { data: Repository[]; ts: number };
    if (Date.now() - ts > CACHE_TTL) return null;
    return data;
  } catch {
    return null;
  }
};

const setCache = (data: Repository[]) => {
  try {
    sessionStorage.setItem(CACHE_KEY, JSON.stringify({ data, ts: Date.now() }));
  } catch { /* ignore quota errors */ }
};

const RepoCarousel: React.FC = () => {
  const [repos, setRepos] = useState<Repository[]>(() => getCached() ?? []);
  const [loading, setLoading] = useState(repos.length === 0);

  useEffect(() => {
    if (repos.length > 0) return; // served from cache

    let cancelled = false;
    fetch('https://api.github.com/users/nisargpatel7042lva/repos?per_page=10&sort=updated')
      .then((r) => (r.ok ? r.json() : Promise.reject()))
      .then((data: Repository[]) => {
        if (cancelled) return;
        setCache(data);
        setRepos(data);
      })
      .catch(() => {
        if (!cancelled) setRepos(FALLBACK_REPOS);
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });

    return () => { cancelled = true; };
  }, []);

  if (loading) {
    return (
      <div className="w-full py-8 flex items-center justify-center gap-3 text-sm text-github-text/50">
        <div className="h-4 w-4 animate-spin rounded-full border-2 border-github-accent border-t-transparent" />
        Loading repositories…
      </div>
    );
  }

  const track = [...repos, ...repos];

  return (
    <div className="my-4">
      <h3 className="text-base font-semibold mb-4 text-github-text">Recent Repositories</h3>

      <div className="carousel-container">
        <div className="carousel-track animate-carousel">
          {track.map((repo, i) => (
            <div key={`${repo.id}-${i}`} className="repository-card">
              <h4 className="font-medium text-sm mb-1.5 truncate">{repo.name}</h4>
              <p className="text-xs text-github-text/60 mb-3 line-clamp-2">
                {repo.description || 'No description'}
              </p>
              <div className="flex items-center justify-between">
                {repo.language && (
                  <div className="flex items-center gap-1.5">
                    <span
                      className="w-2.5 h-2.5 rounded-full inline-block"
                      style={{ backgroundColor: LANGUAGE_COLORS[repo.language] ?? '#ededed' }}
                    />
                    <span className="text-xs text-github-text/60">{repo.language}</span>
                  </div>
                )}
                <Button
                  size="sm"
                  variant="outline"
                  className="text-xs h-7 px-2"
                  onClick={() => window.open(repo.html_url, '_blank')}
                >
                  View <ExternalLink size={10} className="ml-1" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-5 text-center">
        <Button
          variant="outline"
          size="sm"
          className="border-github-accent/50 text-github-accent hover:bg-github-accent hover:text-white gap-2 transition-all"
          onClick={() => window.open('https://github.com/nisargpatel7042lva', '_blank')}
        >
          <Github size={15} />
          View All on GitHub
        </Button>
      </div>
    </div>
  );
};

export default RepoCarousel;
