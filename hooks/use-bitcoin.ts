"use client";

import { useState, useCallback } from 'react';
import { bitcoinActor } from '@/src/declarations/bitcoin';
import { toast } from 'sonner';

export function useBitcoin() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const getProjectAddress = useCallback(async (projectId: string) => {
    try {
      setLoading(true);
      const address = await bitcoinActor.get_project_address(projectId);
      return address;
    } catch (err) {
      setError('Failed to get Bitcoin address');
      toast.error('Failed to get Bitcoin address');
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  const verifyTransaction = useCallback(async (txHash: string) => {
    try {
      setLoading(true);
      const isValid = await bitcoinActor.verify_transaction(txHash);
      return isValid;
    } catch (err) {
      setError('Failed to verify transaction');
      toast.error('Failed to verify transaction');
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  return {
    loading,
    error,
    getProjectAddress,
    verifyTransaction,
  };
}