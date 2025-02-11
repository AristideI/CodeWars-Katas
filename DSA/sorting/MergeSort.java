package DSA.sorting;

import java.util.ArrayList;
import java.util.Arrays;

public class MergeSort {
    public static void main(String[] args) {
        int[] arr = {5, 4, 20, -4, -5, -20, 53, 35, 3, 2, 1};
        int[] sortedArr = merge(arr);
        System.out.println(Arrays.toString(sortedArr));
    }

    public static int[] merge(int[] arr) {
        if (arr.length <= 1) {
            return arr;
        }

        int pivot = arr[arr.length - 1];
        ArrayList<Integer> left = new ArrayList<>();
        ArrayList<Integer> right = new ArrayList<>();

        for (int i = 0; i < arr.length - 1; i++) {
            if (arr[i] < pivot) {
                left.add(arr[i]);
            } else {
                right.add(arr[i]);
            }
        }

        int[] leftSorted = merge(left.stream().mapToInt(i -> i).toArray());
        int[] rightSorted = merge(right.stream().mapToInt(i -> i).toArray());

        return concatenate(leftSorted, pivot, rightSorted);
    }

    private static int[] concatenate(int[] left, int pivot, int[] right) {
        int[] result = new int[left.length + 1 + right.length];

        System.arraycopy(left, 0, result, 0, left.length);
        result[left.length] = pivot;
        System.arraycopy(right, 0, result, left.length + 1, right.length);

        return result;
    }
}
