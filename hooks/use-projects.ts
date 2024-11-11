"use client";

import { useState, useCallback } from 'react';
import { projectActor } from '@/src/declarations/project';
import { toast } from 'sonner';

export function useProjects() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const createProject = useCallback(async (
    title: string,
    description: string,
    goal: bigint,
    endDate: Date
  ) => {
    try {
      setLoading(true);
      const project = await projectActor.create_project(
        title,
        description,
        goal,
        BigInt(endDate.getTime())
      );
      toast.success('Project created successfully');
      return project;
    } catch (err) {
      setError('Failed to create project');
      toast.error('Failed to create project');
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  const getProjects = useCallback(async () => {
    try {
      setLoading(true);
      const projects = await projectActor.get_projects();
      return projects;
    } catch (err) {
      setError('Failed to fetch projects');
      toast.error('Failed to fetch projects');
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  const fundProject = useCallback(async (projectId: string, txHash: string) => {
    try {
      setLoading(true);
      const success = await projectActor.fund_project(projectId, txHash);
      if (success) {
        toast.success('Project funded successfully');
      }
      return success;
    } catch (err) {
      setError('Failed to fund project');
      toast.error('Failed to fund project');
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  return {
    loading,
    error,
    createProject,
    getProjects,
    fundProject,
  };
}